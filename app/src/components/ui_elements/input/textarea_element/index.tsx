import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";
import { InputContainerForSizeS } from "@/components/ui_elements/input/input_container_for_size_s";

import { TextAreaElementProps } from "./types";
import Styles from "./textarea_element.module.css";

/**
 * <TextAreaElement/>コンポーネント
 *
 * @description <textarea/>要素の最小コンポーネント
 * @param {TextAreaElementProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const TextAreaElement = <T extends FieldValues>({
  style,
  size = "l",
  register,
  id,
  rows,
  cols,
  readonly,
  errors,
  placeholder,
  fixed = true,
}: TextAreaElementProps<T>): ReactElement => {
  // クラス名の生成
  const textareaClasses = [
    Styles.textarea,
    Styles[size], // デフォルトサイズ "l"
    errors && Styles.error,
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
