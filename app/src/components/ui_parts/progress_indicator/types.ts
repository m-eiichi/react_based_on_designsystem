/**
 * <ProgressIndicator/>プロパティ
 *
 * @property label プログレスバー周辺に表示する文字
 * @property shape 形状
 * @property inline True=width固定
 * @property overlay True=外枠表示
 */
export type ProgressIndicatorProps = {
  label?: string;
  shape?: "spinner" | "liner";
  inline?: boolean;
  overlay?: boolean;
};
