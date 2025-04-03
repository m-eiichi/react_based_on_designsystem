import React from "react";

export type TypographyProps = {
  style?: React.CSSProperties;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "a";
  color?:
    | "success"
    | "error"
    | "info"
    | "warning"
    | "description"
    | "link"
    | "primary"
    | "secondary"
    | "disabled"
    | "white";
  size?:
    | "body"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2";
  align?: "left" | "center" | "right";
  margin?: "both" | "bottom" | "none";
  weight?: "bold" | "normal";
  onClick?: () => void;
  children: React.ReactNode;
};
