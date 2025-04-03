import { type ReactElement } from "react";
import { TypographyProps } from "./types";
import Styles from "./typography.module.css";

export const Typography = ({
  style,
  as,
  color = "primary",
  size = "body",
  align = "left",
  margin = "none",
  weight,
  onClick,
  children,
}: TypographyProps): ReactElement => {
  // sizeに基づいてデフォルトのタグを決定
  const defaultTag = (() => {
    switch (size) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      default:
        return "p";
    }
  })();

  // asが指定されていない場合は、sizeに基づいたデフォルトタグを使用
  const As = as || defaultTag;

  const className = [
    Styles[color],
    Styles[size],
    Styles[align],
    margin && margin !== "none" && Styles[margin],
    weight && Styles[weight],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <As
      style={{
        ...style,
        ...(onClick ? { cursor: "pointer" } : {}),
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </As>
  );
};
