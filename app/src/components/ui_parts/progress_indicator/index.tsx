import { type ReactElement } from "react";

import { ProgressIndicatorProps } from "./types";
import Styles from "./progress_indicator.module.css";

/**
 * <ProgressIndicator/>コンポーネント
 *
 * @description プログレスバーコンポーネント
 * @param {ProgressIndicatorProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const ProgressIndicator = ({
  label,
  shape = "spinner",
  inline = false,
  overlay = false,
}: ProgressIndicatorProps): ReactElement => {
  const container = [
    Styles.container,
    inline === true ? Styles.inline : Styles.stacked,
    overlay === true ? Styles.overlay : "",
  ];
  const loader = shape === "spinner" ? Styles.spinner : Styles.liner;

  return (
    <div className={container.join(" ")}>
      <div className={loader}></div>
      <p className={Styles.label}>{label}</p>
    </div>
  );
};
