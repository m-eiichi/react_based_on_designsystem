import { type ReactElement } from "react";
import { InputContainerForSizeS } from "@/components/ui_elements/input/input_container_for_size_s";

import { TextAreaElementProps } from "./types";
import Styles from "./textarea_element.module.css";

/**
 * <TextAreaElement/>コンポーネント
 *
 * @description textarea 要素の最小コンポーネント
 *
 * @param {TextAreaElementProps} types.ts参照
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

export const TextAreaElement = ({
  style,
  register,
  id,
  size = "l",
  fullWidth = false,
  rows,
  cols,
  readonly = false,
  error,
  placeholder,
  fixed = true,
}: TextAreaElementProps): ReactElement => {
  // クラス名の生成
  const textareaClasses = [
    Styles.textarea,
    Styles[size], // デフォルトサイズ "l"
    error && Styles.error,
    fullWidth && Styles.full_width,
    (register.disabled || readonly) && Styles.disabled,
    fixed && Styles.fixed,
  ]
    .filter(Boolean)
    .join(" ");

  // プレースホルダー設定
  const textareaPlaceholder = register.disabled ? "" : placeholder;

  return (
    <>
      {size === "s" ? (
        <InputContainerForSizeS width="full">
          <textarea
            style={style}
            className={textareaClasses}
            id={id}
            rows={rows}
            cols={cols}
            placeholder={textareaPlaceholder}
            readOnly={readonly}
            disabled={register.disabled}
            {...register}
          />
        </InputContainerForSizeS>
      ) : (
        <textarea
          style={style}
          className={textareaClasses}
          id={id}
          rows={rows}
          cols={cols}
          placeholder={textareaPlaceholder}
          readOnly={readonly}
          disabled={register.disabled}
          {...register}
        />
      )}
    </>
  );
};
