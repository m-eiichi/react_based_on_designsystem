/**
 * <ProgressIndicator/>プロパティ
 *
 * @property style コンポーネントのルート要素に適用する追加スタイル
 * @property label プログレスバー周辺に表示する文字
 * @property shape 形状
 * @property inline True=width固定
 * @property overlay True=外枠表示
 * @property hasBackground True=オーバーレイ時に背景色を表示する（overlay=true時のみ有効）
 */
export type ProgressIndicatorProps = {
  style?: React.CSSProperties;
  label?: string;
  shape?: "spinner" | "liner";
  inline?: boolean;
  overlay?: boolean;
  hasBackground?: boolean;
};
