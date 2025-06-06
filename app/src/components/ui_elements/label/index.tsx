import { type ReactElement } from "react";

import { LabelProps } from "./types";
import Styles from "./label.module.css";

/**
 * <Label/>コンポーネント
 *
 * @description <label/>要素の最小コンポーネント
 * @param {LabelProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const Label = ({
  style,
  labelFor,
  text,
  requirement,
  disabled,
  textAlign = "left",
}: LabelProps): ReactElement => {
  const labelClass = [
    Styles.label,
    disabled === true && Styles.disabled,
    Styles[`textAlign_${textAlign}`],
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <>
      {(text !== undefined || (!disabled && requirement)) && (
        <label className={labelClass} style={style} htmlFor={labelFor}>
          {text && <span className={Styles.label_text}>{text}</span>}
          {requirement && !disabled && (
            <span className={Styles.requirement}>※</span>
          )}
        </label>
      )}
    </>
  );
};
