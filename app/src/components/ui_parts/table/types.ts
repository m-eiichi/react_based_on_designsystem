/**
 * <Table/>プロパティ
 *
 * @property data.header ヘッダー項目
 * @property data.column 1行分データ
 * @property size コンポーネントサイズ
 * @property theadFixed True=ヘッダー位置固定
 * @property tableWidth テーブルの横幅
 * @property tableHeight テーブルの高さ
 */
export type TableProps = {
  data?: {
    header: (string | number)[];
    column: (string | number)[][];
  };
  size?: "s" | "m" | "l";
  theadFixed?: boolean;
  tableWidth?: string;
  tableHeight?: string;
};
