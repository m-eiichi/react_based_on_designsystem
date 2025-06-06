import { ReactElement, useEffect, useRef, useState } from "react";
import {
  TabulatorFull,
  ColumnDefinition,
  RowComponent,
} from "tabulator-tables";
import { TableTBProps } from "./types";
import "tabulator-tables/dist/css/tabulator.min.css";
import "./style.css";
import Styles from "./table_tb.module.css";
import { ProgressIndicator } from "../../progress_indicator";

/**
 * <TableTB/>コンポーネント
 *
 * @description tabulator用のコンポーネント
 * @param {TableTBProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const TableTB = ({
  data = [],
  columns = [],
  size = "m",
  height,
  rowIdentityKeys,
  rowClick,
  rowDblClick,
  renderComplete,
  loading = false,
}: TableTBProps): ReactElement => {
  const tableRef = useRef<HTMLDivElement>(null);
  const tableInstanceRef = useRef<TabulatorFull | null>(null);
  const [isInitialized, setIsInitialized] = useState(false); // 初期化フラグ
  const [isTableBuilt, setIsTableBuilt] = useState(false);

  const applyHeaderStyles = () => {
    const headers = document.querySelectorAll(".tabulator-col");
    headers.forEach((header) => {
      header.classList.add(Styles[`.header_${size}`]);
    });
  };

  const setTableScrollVisibility = (loadingState?: boolean) => {
    // 縦スクロールを無効化
    const tableHolder = tableRef.current?.querySelector(
      ".tabulator-tableholder",
    );
    if (tableHolder instanceof HTMLElement && loadingState !== undefined) {
      tableHolder.style.overflowY = loadingState ? "hidden" : "auto";
    }
  };
  // Rowの高さ取得
  const getRowHeight = (size: "s" | "m" | "l"): number => {
    if (size === "s") return 32;
    else if (size === "m") return 48;
    else return 80;
  };

  // データの同一性チェック
  const isIdenticalDataObject = (
    data_a: any,
    data_b: any,
    IdentityKeys: string[],
  ): boolean => {
    // dataがnullの場合はfalse
    if (data_a === null || data_b === null) return false;
    // dataがobject出ない場合はfalse
    if (typeof data_a !== "object" || typeof data_b !== "object") return false;
    // dataのkeyの数が同一でない場合はfalse
    if (Object.keys(data_a).length !== Object.keys(data_b).length) return false;

    // キーの設定がない場合false
    if (IdentityKeys.length === 0) return false;

    // データの同一性チェック
    for (let i = 0; i < IdentityKeys.length; i++) {
      // 数字、文字のみでチェック
      if (
        typeof data_a[IdentityKeys[i]] !== "string" &&
        typeof data_a[IdentityKeys[i]] !== "number"
      ) {
        continue;
      }

      if (data_a[IdentityKeys[i]] !== data_b[IdentityKeys[i]]) return false;
    }
    return true;
  };

  // columnsにmodule.cssのクラスを注入
  const addCssStyle = (columns: ColumnDefinition[]): ColumnDefinition[] => {
    return columns.map((column) => {
      column.cssClass = Styles[`.cell_${size}`];
      column.vertAlign = "middle";
      column.headerHozAlign = "center";
      return column;
    });
  };

  // rowClickイベント
  const rowClickEvent = (event: UIEvent | null, row: RowComponent) => {
    if (!tableInstanceRef.current) return;
    const selectedRows = tableInstanceRef.current.getSelectedRows();

    // 現在選択されている行が1つだけでない場合は選択をリセット
    if (selectedRows.length > 1) {
      row.deselect(); // クリックした行の選択を解除
    }

    if (typeof rowClick === "function") rowClick(event, row);
  };

  // 初回のみ実行
  useEffect(() => {
    if (!tableRef.current) return; // tableRef の null チェック

    const frame = requestAnimationFrame(() => {
      const table = new TabulatorFull(
        tableRef.current as string | HTMLDivElement,
        {
          data: data,
          columns: addCssStyle(columns),
          layout: "fitColumns",
          movableColumns: false, // 列の順序.変更可否
          placeholder: "該当するデータは存在しません", // データがないときの表示
          rowHeight: getRowHeight(size),
          height: height ? height : "100%",
          selectableRows: 1, // 行を選択可能にする
        },
      );

      // イベントセット
      table.on("renderComplete", () => {
        const headers = document.querySelectorAll(".tabulator-col");
        headers.forEach((header) => {
          header.classList.add(Styles[`.header_${size}`]);
        });

        if (typeof renderComplete === "function") renderComplete();
      });
      table.on("rowClick", rowClickEvent);
      if (typeof rowDblClick === "function")
        table.on("rowDblClick", rowDblClick);

      table.on("tableBuilt", () => {
        setIsTableBuilt(true);
      });

      tableInstanceRef.current = table;
      setIsInitialized(true); // 初期化完了
    });

    return () => {
      cancelAnimationFrame(frame);
      tableInstanceRef.current?.destroy();
      tableInstanceRef.current = null;
      setIsInitialized(false);
    };
  }, []);

  // data 更新時に差分更新
  useEffect(() => {
    if (!isTableBuilt) return;
    if (!tableInstanceRef.current) return;
    const selectedData = tableInstanceRef.current.getSelectedData()[0];

    tableInstanceRef.current.setData(data).then(() => {
      // tableRef の null チェック
      if (!tableInstanceRef.current) return;

      // データ更新後再描画
      tableInstanceRef.current.redraw();

      // キーの設定がない場合何もしない
      if (!rowIdentityKeys) return;

      const rows = tableInstanceRef.current.getRows();

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const rowData = row.getData();
        if (isIdenticalDataObject(rowData, selectedData, rowIdentityKeys)) {
          row.select();
          rowClickEvent(null, row);
          break;
        }
      }
    });
  }, [data]);

  // columns 更新時に差分更新
  useEffect(() => {
    if (isInitialized && tableInstanceRef.current) {
      tableInstanceRef.current.setColumns(addCssStyle(columns));
    }
  }, [columns]);

  useEffect(() => {
    if (!tableInstanceRef.current) return;

    applyHeaderStyles();
    setTableScrollVisibility(loading);
  }, [loading, data]);

  return (
    <div style={{ position: "relative", height: height }}>
      <div className={Styles.tabulator_table} ref={tableRef} />

      {loading && ( //Loading時のスタイル
        <ProgressIndicator overlay hasBackground />
      )}
    </div>
  );
};
