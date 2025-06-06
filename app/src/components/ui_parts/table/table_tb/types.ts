import { ColumnDefinition, RowComponent, OptionsData } from "tabulator-tables";

/**
 * <TableTB/>プロパティ
 *
 * @property data 表示データ
 * @property columns colomnデータ
 * @property size Rowの高さ
 * @property rowIdentityKeys ユニークキーとなるデータ
 * @property rowClick 行クリックイベント
 * @property rowDblClick 行ダブルクリックイベント
 * @property renderComplete テーブルの描画完了時イベント
 * @property loading 読み込み中状態のフラグ。trueの間はスクロールを無効にするなどの制御に使用
 */
export type TableTBProps = OptionsData & {
  columns?: ColumnDefinition[];
  size?: "s" | "m" | "l";
  height?: string;
  rowIdentityKeys?: string[];
  rowClick?: (event: UIEvent | null, row: RowComponent) => void;
  rowDblClick?: (event: UIEvent, row: RowComponent) => void;
  renderComplete?: () => void;
  loading?: boolean;
};
