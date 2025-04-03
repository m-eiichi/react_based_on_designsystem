/**
 * <Th/>プロパティ
 *
 * @property style - カスタムのインラインスタイルを指定する
 * @property size - セルのサイズを指定する ("xs" | "s" | "m" | "l")。デフォルトは "m"
 * @property color - セルの色を指定する ("primary" | "secondary" | "tertiary")
 * @property alignItems - Flexboxの`align-items`プロパティを指定 ("center" | "start" | "end")
 * @property textAlign - テキストの配置を指定 ("left" | "center" | "right")。デフォルトは "left"
 * @property border - セルの境界線スタイルを指定する ("all" | "none" | "t" | "r" | "b" | "l" | "rb" | "trb" | "rbl")。デフォルトは "all"
 * @property as - 使用するHTMLタグを指定する ("th" | "div")。デフォルトは "th"
 * @property contentOverflow - コンテンツのオーバーフロー時の挙動を指定する ("scroll" | "wrap")。デフォルトは "wrap"
 * @property children - セル内にレンダリングするコンテンツ（子要素）
 */

export type ThProps = {
  style?: React.CSSProperties;
  size?: "xs" | "s" | "m" | "l";
  color?: "primary" | "secondary" | "tertiary";
  alignItems?: "center" | "start" | "end";
  border?: "all" | "none" | "t" | "r" | "b" | "l" | "rb" | "trb" | "rbl";
  as?: "th" | "div";
  contentOverflow?: "scroll" | "wrap";
  children?: React.ReactNode;
};
