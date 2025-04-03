import Styles from "./toggle_switch.module.css";
import { ToggleSwitchProps } from "./types";

/**
 * <ToggleSwitch/>コンポーネント
 *
 * @description ON/OFFスイッチコンポーネント
 * @param {ToggleSwitchProps} props types.ts参照
 * @returns {JSX.Element} コンポーネント
 */
export const ToggleSwitch = ({
  size,
  disabled,
  onClick,
  checked,
}: ToggleSwitchProps) => {
  const toggleSwitch = [
    Styles.switch,
    size === undefined ? Styles.l : Styles[size],
    disabled === true ? Styles.disabled : "",
  ];
  return (
    <label className={toggleSwitch.join(" ")}>
      <input
        type="checkbox"
        disabled={disabled}
        defaultChecked={checked}
        onClick={onClick}
      />
      <div className={Styles.button_area}></div>
    </label>
  );
};
