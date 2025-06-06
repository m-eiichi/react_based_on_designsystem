/**
 * <Icon/>プロパティ
 *
 * @property src 画像URL
 * @property アイコンのサイズ
 * @property alt用のテキスト
 */

export type IconProps = {
  style?: React.CSSProperties;
  src?: string;
  size?: "s" | "m" | "l";
  type?: "circle" | "square";
  alt?: string;
};
