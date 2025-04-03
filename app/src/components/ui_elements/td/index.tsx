import { type ReactElement } from "react";
import { TdProps } from "./types.ts";
import Styles from "./td.module.css";

/**
 * <Td/>コンポーネント
 *
 * @description
 * @param {TdProps} types.ts参照
 * @returns {ReactElement | null} コンポーネント
 */

export const Td = ({
  style,
  as: As = "td",
  size = "m",
  textAlign = "left",
  alignItems = "center",
  border = "all",
  contentOverflow = "wrap",
  children,
}: TdProps): ReactElement => {
  const className = [
    Styles.td,
    Styles[`size_${size}`],
    Styles[`textAlign_${textAlign}`],
    Styles[`alignItems_${alignItems}`],
    Styles[`border_${border}`],
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
