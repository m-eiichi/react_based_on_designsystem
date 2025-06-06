import { type ReactElement } from "react";

import { DividerProps } from "./types";
import Styles from "./divider.module.css";

/**
 * <Divider/>コンポーネント
 *
 * @description <hr/>要素の最小コンポーネント
 * @param {DividerProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */

export const Divider = ({
  style,
  color = "dark",
  lineWeight = "s",
  mx,
  my,
  borderStyle = "solid",
}: DividerProps): ReactElement => {
  const className = [
    Styles.divider,
    Styles[color],
    Styles[`lineWeight_${lineWeight}`],
    mx && Styles.hasHorizontalMargin,
    my && Styles[`vertical_${my}`],
    Styles[borderStyle],
  ]
    .filter(Boolean)
    .join(" ");

  return <hr className={className} style={style} />;
};
