/**
 * <Divider/>プロパティ
 *
 * @property style 直接styleを指定するプロパティ
 * @property color 線色
 * @property lightWeight 線の太さ
 * @property variant fullWidth=横幅いっぱい inset=余白あり(--size-f-02)
 * @property verticalMargin 上下マージン none=0px s=--size-f-01 m=--size-f-02 l=--size-f-03
 * @property borderStyle solid=実線 dashed=破線
 */
export type DividerProps = {
  style?: React.CSSProperties;
  color?: "light" | "dark";
  lineWeight?: "s" | "m" | "l" | "xl";
  mx?: boolean;
  my?: "none" | "s" | "m" | "l";
  borderStyle?: "solid" | "dashed";
};
