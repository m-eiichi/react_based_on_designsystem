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
  style,
  label,
  shape = "spinner",
  inline = false,
  overlay = false,
  hasBackground = false,
}: ProgressIndicatorProps): ReactElement => {
  const wrap = [
    overlay && Styles.overlay,
    hasBackground && Styles.hasBackground,
  ];
  const container = [
    Styles.container,
    inline === true ? Styles.inline : Styles.stacked,
  ];
  const loader = shape === "spinner" ? Styles.spinner : Styles.liner;

  const content = (
    <div className={container.join(" ")}>
      <div className={loader}></div>
      {label && <p className={Styles.label}>{label}</p>}
    </div>
  );

  return (
    <>
      {overlay ? (
        <div className={wrap.join(" ")} style={style}>
          {content}
        </div>
      ) : (
        content
      )}
    </>
  );
};
