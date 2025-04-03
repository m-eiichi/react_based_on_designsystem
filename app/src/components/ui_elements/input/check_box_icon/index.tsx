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
  id,
  value,
  checked,
  disabled,
  readonly,
  register,
  error,
  handleBlur,
  handleChange,
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
        onBlur={(e) => {
          // register
          register?.onBlur(e);

          // props分
          if (handleBlur) {
            if (typeof handleBlur === "function") {
              handleBlur(e);
            } else {
              handleBlur.forEach((blur_event) => blur_event(e));
            }
          }
        }}
        onChange={(e) => {
          // register
          register?.onChange(e);

          // props分
          if (handleChange) {
            if (typeof handleChange === "function") {
              handleChange(e);
            } else {
              handleChange.forEach((change_event) => change_event(e));
            }
          }
        }}
      />
      <label className={icon} htmlFor={id}></label>
    </>
  );
};
