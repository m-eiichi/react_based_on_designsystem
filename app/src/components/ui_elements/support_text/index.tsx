import { type ReactElement } from "react";
import { clsx } from "clsx";

import { SupportTextProps } from "./types";
import Styles from "./support_text.module.css";

/**
 * <SupportText/>コンポーネント
 *
 * @description 補足説明用のテキストの最小コンポーネント
 * @param {SupportTextProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const SupportText = ({
  disabled,
  children,
}: SupportTextProps): ReactElement => {
  const textClass = clsx(Styles.text, disabled && Styles.disabled);
  return <p className={textClass}>{children}</p>;
};
