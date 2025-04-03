/**
 * <Td/>コンポーネントのプロパティ
 *
 * @property style - カスタムのインラインスタイルを指定する
 * @property size - セルのサイズを指定する ("xs" | "s" | "m" | "l")。デフォルトは "m"
 * @property textAlign - テキストの水平位置を指定する ("left" | "center" | "right")。デフォルトは "left"
 * @property alignItems - Flexboxの`align-items`プロパティを指定する ("center" | "start" | "end")
 * @property border - セルの境界線スタイルを指定する ("all" | "none" | "t" | "r" | "b" | "l" | "rb" | "trb" | "rbl")。デフォルトは "all"
 * @property as - 使用するHTMLタグを指定する ("td" | "div")。デフォルトは "td"
 * @property contentOverflow - コンテンツのオーバーフロー時の挙動を指定する ("scroll" | "wrap")。デフォルトは "wrap"
 * @property children - セル内にレンダリングするコンテンツ（子要素）
 */

export type TdProps = {
  style?: React.CSSProperties;
  size?: "xs" | "s" | "m" | "l";
  textAlign?: "left" | "center" | "right";
  alignItems?: "center" | "start" | "end";
  border?: "all" | "none" | "t" | "r" | "b" | "l" | "rb" | "trb" | "rbl";
  as?: "td" | "div";
  contentOverflow?: "scroll" | "wrap";
  children?: React.ReactNode;
};
