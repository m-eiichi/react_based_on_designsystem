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
  type = "fit",
  vMarginType = "contents",
  color = "text",
  weight = "s",
  borderStyle = "solid",
}: DividerProps): ReactElement => {
  const className = [
    Styles.divider,
    Styles[type],
    Styles[vMarginType],
    Styles[color],
    Styles[weight],
    Styles[borderStyle],
  ];
  return <hr className={className.join(" ")} />;
};
