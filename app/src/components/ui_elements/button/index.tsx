import { type ReactElement } from "react";

import { ButtonProps } from "./types";
import Styles from "./button.module.css";

/**
 * <Button/>コンポーネント
 *
 * @description <Button/>要素の最小コンポーネント
 * @param {ButtonProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const Button = ({
  style,
  color,
  size,
  fullWidth,
  onClick,
  disabled,
  children,
  type,
}: ButtonProps): ReactElement => {
  const className = [
    Styles.button,
    color !== undefined ? Styles[`${color}`] : Styles.primary,
    size !== undefined ? Styles[`${size}`] : Styles.m,
    fullWidth === true ? Styles.full_width : "",
  ];

  return (
    <>
      {size == "s" || size == "xs" ? (
        <div className={Styles.button__wrap}>
          <button
            style={{ ...style }}
            className={className.join(" ")}
            onClick={onClick}
            disabled={disabled}
            type={type}
          >
            {children}
          </button>
        </div>
      ) : (
        <button
          style={{ ...style }}
          className={className.join(" ")}
          onClick={onClick}
          disabled={disabled}
          type={type}
        >
          {children}
        </button>
      )}
    </>
  );
};
