import { type ReactElement } from "react";
import { CheckBoxIcon } from "@/components/ui_elements/input/check_box_icon";
import { CheckBoxProps } from "./types";
import Styles from "./check_box.module.css";

/**
 * <CheckBox/>コンポーネント
 *
 * @description チェックボックス単体コンポーネント
 * @param {CheckBoxProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const CheckBox = ({
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
  error,
  tile,
  register,
  ...rest
}: CheckBoxProps): ReactElement => {
  // チェックボックスの幅の設定
  const checkBoxStyles = width
    ? { width: width }
    : minWidth
      ? { minWidth: minWidth }
      : {};

  // クラス名の生成
  const checkBoxClassNames = [
    Styles.check_box,
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
    <div style={checkBoxStyles} className={checkBoxClassNames}>
      <CheckBoxIcon
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
