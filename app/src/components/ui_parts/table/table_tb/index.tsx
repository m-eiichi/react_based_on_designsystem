import { ReactElement, useEffect, useRef } from "react";
import { TabulatorFull, ColumnDefinition } from "tabulator-tables";
import { TableTBProps } from "./types";
import "tabulator-tables/dist/css/tabulator.min.css";
import "./style.css";
import Styles from "./table_tb.module.css";

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
  rowClick,
  rowDblClick,
}: TableTBProps): ReactElement => {
  const tableRef = useRef<HTMLDivElement>(null);

  // Rowの高さ取得
  const getRowHeight = (size: "s" | "m" | "l"): number => {
    if (size === "s") return 32;
    else if (size === "m") return 48;
    else return 80;
  };

  // columnsにmodule.cssのクラスを注入
  const addCssStyle = (columns: ColumnDefinition[]): ColumnDefinition[] => {
    return columns.map((column) => {
      column.cssClass = Styles[`cell_${size}`];
      column.vertAlign = "middle";
      column.headerHozAlign = "center";
      // column.hozAlign = "center";
      return column;
    });
  };

  // useEffectにTabulator生成処理を追加する
  useEffect(() => {
    if (tableRef.current) {
      const table = new TabulatorFull(tableRef.current, {
        data: data,
        columns: addCssStyle(columns),
        layout: "fitColumns",
        movableColumns: false, // 列の順序.変更可否
        placeholder: "該当するデータは存在しません", // データがないときの表示
        rowHeight: getRowHeight(size),
        height: "100%",
      });
      table.on("renderComplete", () => {
        const headers = document.querySelectorAll(".tabulator-col");
        headers.forEach((header) => {
          header.classList.add(Styles[`header_${size}`]);
        });
      });
      if (typeof rowClick === "function") table.on("rowClick", rowClick);
      if (typeof rowDblClick === "function")
        table.on("rowDblClick", rowDblClick);
    }
  }, [data]);

  return <div className={Styles.tabulator_table} ref={tableRef} />;
};
