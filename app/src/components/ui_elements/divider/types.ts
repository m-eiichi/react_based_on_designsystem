/**
 * <Divider/>プロパティ
 *
 * @property colorType 線色
 * @property weight 線の太さ
 * @property type fit=横幅いっぱい inset=余白あり(--size-f-02)
 * @property vMarginType 上下マージン list=--size-f-01 contents=--size-f-02
 */
export type DividerProps = {
  color?: "gray" | "text";
  weight?: "s" | "m" | "l" | "xl";
  type?: "fit" | "inset";
  vMarginType?: "list" | "contents" | "none";
  borderStyle?: "solid" | "dashed";
};
