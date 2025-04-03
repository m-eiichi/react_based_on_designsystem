import { SupportTextProps } from "./types";
import Styles from "./support_text.module.css";

/**
 * <SupportText/>コンポーネント
 *
 * @description 補足説明用のテキストの最小コンポーネント
 * @param {SupportTextProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const SupportText = ({ disabled, children }: SupportTextProps) => {
  const text = [Styles.text, disabled === true ? Styles.disabled : ""];
  return <p className={text.join(" ")}>{children}</p>;
};
