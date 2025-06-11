import { type ReactElement } from "react";
import { CheckBoxIconProps } from "./types";

import Styles from "./check_box_icon.module.css";

/**
 * <CheckBoxIcon />コンポーネント
 *
 * @description チェックボックスのアイコン部分のコンポーネント
 *
 * @param {CheckBoxIconProps} props types.ts参照
 *
 * @returns {ReactElement} コンポーネント
 *
 * @remarks
 * バリデーションは zod + react-hook-form の resolver によって行うため、
 * このコンポーネント内では `onBlur` や `onChange` によるバリデーション処理は不要です。
 * また、`disabled` 状態も含め、フォームの状態管理は react-hook-form に任せる方針としています。
 *
 * そのため、`onChange` / `onBlur` / `disabled` などの属性はこのコンポーネントでは個別に扱わず、
 * 呼び出し元で `register()` の返り値をスプレッドする形で渡すことを想定しています。
 */

export const CheckBoxIcon = ({
  style,
  register,
  id,
  value,
  disabled = false,
  readonly = false,
  error,
}: CheckBoxIconProps): ReactElement => {
  const icon = [
    Styles.icon,
    (disabled || register.disabled) && Styles.disabled,
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
        disabled={disabled || register.disabled}
        readOnly={readonly}
        {...register}
      />
      <label className={icon} style={style} htmlFor={id}></label>
    </>
  );
};
