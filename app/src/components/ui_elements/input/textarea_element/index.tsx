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
  size = "l",
  width,
  register,
  id,
  rows,
  cols,
  readonly,
  errors,
  placeholder,
  fixed = true,
  defaultValue,
  handleBlur,
  handleChange,
}: TextAreaElementProps<T>): ReactElement => {
  // テキストエリアの幅設定
  const textareaWidth = {
    maxWidth: width || "none",
  };

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

  // `onBlur` イベントハンドラ
  const handleBlurEvent = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    register?.onBlur(e);

    if (handleBlur) {
      Array.isArray(handleBlur)
        ? handleBlur.forEach((blurEvent) => blurEvent(e))
        : handleBlur(e);
    }
  };

  // `onChange` イベントハンドラ
  const handleChangeEvent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    register?.onChange(e);

    if (handleChange) {
      Array.isArray(handleChange)
        ? handleChange.forEach((changeEvent) => changeEvent(e))
        : handleChange(e);
    }
  };

  return (
    <>
      {size === "s" ? (
        <InputContainerForSizeS width="full">
          <textarea
            style={textareaWidth}
            className={textareaClasses}
            id={id}
            rows={rows}
            cols={cols}
            placeholder={textareaPlaceholder}
            readOnly={readonly}
            disabled={register.disabled}
            defaultValue={defaultValue}
            {...register}
            onBlur={handleBlurEvent}
            onChange={handleChangeEvent}
          />
        </InputContainerForSizeS>
      ) : (
        <textarea
          style={textareaWidth}
          className={textareaClasses}
          id={id}
          rows={rows}
          cols={cols}
          placeholder={textareaPlaceholder}
          readOnly={readonly}
          disabled={register.disabled}
          defaultValue={defaultValue}
          {...register}
          onBlur={handleBlurEvent}
          onChange={handleChangeEvent}
        />
      )}
    </>
  );
};
