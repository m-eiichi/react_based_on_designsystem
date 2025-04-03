import { type ReactElement } from "react";
import { ThProps } from "./types.ts";
import Styles from "./th.module.css";

/**
 * <Th/>コンポーネント
 *
 * @description
 * @param {ThProps} types.ts参照
 * @returns {ReactElement | null} コンポーネント
 */

export const Th = ({
  style,
  as: As = "th",
  size = "m",
  alignItems = "center",
  border = "all",
  color = "primary",
  contentOverflow = "wrap",
  children,
}: ThProps): ReactElement => {
  const className = [
    Styles.th,
    Styles[`size_${size}`],
    Styles[`alignItems_${alignItems}`],
    Styles[`border_${border}`],
    Styles[`color_${color}`],
    contentOverflow === "scroll" && Styles.scroll,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <As className={className} style={{ ...style }}>
      <span className={Styles.children}>{children}</span>
    </As>
  );
};
