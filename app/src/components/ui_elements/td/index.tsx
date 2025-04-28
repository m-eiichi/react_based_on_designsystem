import { type ReactElement } from "react";
import { clsx } from "clsx";
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
  const tdClass = clsx(
    Styles.td,
    Styles[`size_${size}`],
    Styles[`textAlign_${textAlign}`],
    Styles[`alignItems_${alignItems}`],
    Styles[`border_${border}`],
    contentOverflow === "scroll" && Styles.scroll,
  );

  return (
    <As className={tdClass} style={style}>
      <span className={Styles.children}>{children}</span>
    </As>
  );
};
