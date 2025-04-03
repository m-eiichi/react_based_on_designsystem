import { ColumnDefinition, RowComponent } from "tabulator-tables";

/**
 * <TableTB/>プロパティ
 *
 * @property data 表示データ
 * @property columns colomnデータ
 * @property size Rowの高さ
 * @property rowClick 行クリックイベント
 * @property rowDblClick 行ダブルクリックイベント
 */
export type TableTBProps = {
  data?: any[];
  columns?: ColumnDefinition[];
  size?: "s" | "m" | "l";
  rowClick?: (event: UIEvent, row: RowComponent) => void;
  rowDblClick?: (event: UIEvent, row: RowComponent) => void;
};
