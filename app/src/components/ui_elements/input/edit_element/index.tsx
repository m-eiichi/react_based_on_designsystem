import { type ReactElement } from "react";
import { InputContainerForSizeS } from "@/components/ui_elements/input/input_container_for_size_s";

import { EditElementProps } from "./types";
import Styles from "./edit_element.module.css";

/**
 * <EditElement/>コンポーネント
 *
 * @description edit要素の最小コンポーネント
 *
 * @param {EditElementProps} props types.ts参照
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

export const EditElement = ({
  style,
  register,
  id,
  size = "l",
  fullWidth = false,
  placeholder,
  readonly,
  error,
  type = "text",
  numberSpin,
  multiple,
}: EditElementProps): ReactElement => {
  const inputClasses = [
    type === "color"
      ? Styles.input_color
      : type === "file"
        ? Styles.input_file
        : type === "range"
          ? Styles.input_range
          : Styles.input,
    size === undefined ? Styles.l : Styles[size],
    fullWidth && Styles.full_width,
    error && Styles.error,
    (register?.disabled || readonly) === true ? Styles.disabled : "",
    numberSpin === true ? "" : Styles.no_spin,
  ]
    .filter(Boolean)
    .join(" ");

  const renderInput = () =>
    register.disabled ? (
      <input
        style={style}
        className={inputClasses}
        id={id}
        type={type === null ? "text" : type}
        placeholder=""
        defaultValue=""
        value=""
        {...register}
      />
    ) : (
      <input
        style={style}
        className={inputClasses}
        id={id}
        type={type === null ? "text" : type}
        multiple={multiple}
        placeholder={placeholder}
        readOnly={readonly}
        {...register}
      />
    );

  return (
    <>
      {size === "s" ? (
        <InputContainerForSizeS display={fullWidth ? "block" : "inlineBlock"}>
          {renderInput()}
        </InputContainerForSizeS>
      ) : (
        renderInput()
      )}
    </>
  );
};
