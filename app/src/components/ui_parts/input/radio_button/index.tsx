import { type ReactElement } from "react";
import { RadioButtonProps } from "./types";
import Styles from "./radio_button.module.css";
import { RadioButtonIcon } from "@/components/ui_elements/input/radio_button_icon";

/**
 * <RadioButton/>コンポーネント
 *
 * @description ラジオボタン単体コンポーネント
 * @param {RadioButtonProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const RadioButton = ({
  size = "l",
  width,
  minWidth,
  id,
  value,
  text,
  subText,
  checked,
  disabled,
  readonly,
  tile,
  register,
  error,
  ...rest
}: RadioButtonProps): ReactElement => {
  // ラジオボタンの最大幅の設定
  const radioButtonStyles = width
    ? { width: width }
    : minWidth
      ? { minWidth: minWidth }
      : {};

  // クラス名の生成
  const radioButtonClassNames = [
    Styles.radio_button,
    Styles[size], // デフォルトで"l"を設定
    (disabled || readonly || register?.disabled) && Styles.disabled,
    error && Styles.error,
    tile
      ? size === "s"
        ? Styles.tile_m
        : Styles[`tile_${size}`]
      : Styles[`normal_${size}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div style={radioButtonStyles} className={radioButtonClassNames}>
      <RadioButtonIcon
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        readonly={readonly}
        register={register}
        error={error}
        {...rest}
      />
      <label htmlFor={id}>
        <div className={Styles.label_in}>
          <span className={Styles.name}>{text}</span>
          {tile && subText && (
            <span className={Styles.sub_name}>{subText}</span>
          )}
        </div>
      </label>
    </div>
  );
};
