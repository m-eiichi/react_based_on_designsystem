import { type ReactElement } from "react";
import { CheckBoxIconProps } from "./types";

import Styles from "./check_box_icon.module.css";

/**
 * <CheckBoxIcon/>コンポーネント
 *
 * @description チェックボックスのアイコン
 * @param {CheckBoxIconProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const CheckBoxIcon = ({
  style,
  id,
  value,
  checked,
  disabled,
  readonly,
  register,
  error,
}: CheckBoxIconProps): ReactElement => {
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
        type="checkbox"
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
