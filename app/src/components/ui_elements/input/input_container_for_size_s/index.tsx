import Styles from "./edit_container_for_size_s.module.css";
import { InputContainerForSizeSProps } from "./types";

/**
 * <InputContainerForSizeS/>コンポーネント
 *
 * @description input系のコンポーネントのSサイズのコンテナ用コンポーネント
 * @param {InputContainerForSizeSProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */

export const InputContainerForSizeS = ({
  display = "inlineBlock",
  width = "auto",
  children,
}: InputContainerForSizeSProps) => {
  const ClassNames = [
    Styles.container,
    width === "full" && Styles.full_width,
    Styles[`display_${display}`],
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={ClassNames}>{children}</div>;
};
