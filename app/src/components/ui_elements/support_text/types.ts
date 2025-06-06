/**
 * <supportText/>プロパティ
 *
 * @property style 直書き用
 * @property disabled True=disabled(見た目のみ)
 * @property children 子要素
 */
export type SupportTextProps = {
  style?: React.CSSProperties;
  disabled?: boolean;
  children: React.ReactNode;
};
