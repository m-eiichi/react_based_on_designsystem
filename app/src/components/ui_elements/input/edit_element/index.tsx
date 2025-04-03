import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";
import { InputContainerForSizeS } from "@/components/ui_elements/input/input_container_for_size_s";

import { EditElementProps } from "./types";
import Styles from "./edit_element.module.css";

/**
 * <EditElement/>コンポーネント
 *
 * @description <input/>要素の最小コンポーネント
 * @param {EditElementProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const EditElement = <T extends FieldValues>({
  id,
  type,
  size,
  width,
  widthFixed = true,
  multiple,
  readonly,
  defaultValue,
  placeholder,
  numberSpin,
  handleBlur,
  handleChange,
  register,
  errors,
}: EditElementProps<T>): ReactElement => {
  const editWidth = () => {
    if (widthFixed && width) {
      return { width: width };
    } else if (!widthFixed && width) {
      return { maxWidth: width };
    }
  };

  const inputClasses = [
    type === "color"
      ? Styles.input_color
      : type === "file"
        ? Styles.input_file
        : type === "range"
          ? Styles.input_range
          : Styles.input,
    size === undefined ? Styles.l : Styles[size],
    !widthFixed && Styles.full_width,
    errors !== undefined ? Styles.error : "",
    (register?.disabled || readonly) === true ? Styles.disabled : "",
    numberSpin === true ? "" : Styles.no_spin,
  ]
    .filter(Boolean)
    .join(" ");

  const placeHolder = !register?.disabled ? placeholder : "";

  const renderInput = () => (
    <input
      style={editWidth()}
      className={inputClasses}
      id={id}
      type={type === null ? "text" : type}
      multiple={multiple}
      placeholder={placeHolder}
      readOnly={readonly}
      defaultValue={defaultValue}
      {...register}
      onBlur={(e) => {
        register?.onBlur(e);
        if (handleBlur) {
          if (typeof handleBlur === "function") {
            handleBlur(e);
          } else {
            handleBlur.forEach((blurEvent) => blurEvent(e));
          }
        }
      }}
      onChange={(e) => {
        register?.onChange(e);
        if (handleChange) {
          if (typeof handleChange === "function") {
            handleChange(e);
          } else {
            handleChange.forEach((changeEvent) => changeEvent(e));
          }
        }
      }}
    />
  );

  if (register.disabled === true) {
    return (
      <input
        style={editWidth()}
        className={inputClasses}
        id={id}
        type={type === null ? "text" : type}
        placeholder=""
        defaultValue=""
        value=""
        {...register}
      />
    );
  }

  return (
    <>
      {size === "s" ? (
        <InputContainerForSizeS display={!widthFixed ? "block" : "inlineBlock"}>
          {renderInput()}
        </InputContainerForSizeS>
      ) : (
        renderInput()
      )}
    </>
  );
};
