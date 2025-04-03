import { Table } from "@tanstack/react-table";

/**
 * <TableRT/>プロパティ
 *
 * @property tableInstance インスタンス
 * @property size テーブルサイズ
 * @property theadFixed theadの固定の有無
 * @property fixedColumn 列の固定（左から何列までを固定するかを指定）
 * @property tableHeight tableの高さの指定
 */
export type TableRTProps = {
  tableInstance: Table<any>;
  size?: "s" | "m" | "l";
  theadFixed?: boolean;
  fixedColumn?: number;
  tableHeight?: string;
};
