import { type ReactElement } from "react";
import { RadioButtonIconProps } from "./types";

import Styles from "./radio_button_icon.module.css";

/**
 * <RadioButtonIcon/>コンポーネント
 *
 * @description ラジオボタンのアイコン
 * @param {RadioButtonIconProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const RadioButtonIcon = ({
  style,
  id,
  value,
  checked,
  disabled,
  readonly,
  register,
  error,
}: RadioButtonIconProps): ReactElement => {
  const icon = [
    Styles.icon,
    (register.disabled || disabled) && Styles.disabled,
    error && Styles.error,
    !register.disabled && readonly && Styles.readonly,
  ]
    .filter(Boolean) // 無効な値を除去
    .join(" ");
  return (
    <>
      <input
        className={Styles.input}
        type="radio"
        id={id}
        value={value}
        defaultChecked={checked}
        disabled={register.disabled || disabled}
        {...register}
      />
      <label className={icon} style={style} htmlFor={id}></label>
    </>
  );
};
