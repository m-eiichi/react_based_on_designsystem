/**
 * <Label/>プロパティ
 *
 * @property text 内容
 * @property requirement True=必須アイコン表示
 * @property labelFor for属性
 * @property disabled True=disabled(見た目のみ)
 */
export type LabelProps = {
  style?: React.CSSProperties;
  text?: string;
  requirement?: boolean;
  labelFor?: string;
  disabled?: boolean;
  textAlign?: "left" | "center" | "right";
};
