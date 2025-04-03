/**
 * <ToggleSwitch/>プロパティ
 *
 * @property size コンポーネントサイズ
 * @property disabled True=disabled
 * @property checked True=checked
 * @property onClick click時イベント
 */
export type ToggleSwitchProps = {
  size?: "s" | "m" | "l";
  disabled?: boolean;
  checked?: boolean;
  onClick?: () => void;
};
