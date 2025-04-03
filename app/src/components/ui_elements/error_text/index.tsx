import { errorTextProps } from "./types";
import Styles from "./error_text.module.css";

/**
 * <ErrorText/>コンポーネント
 *
 * @param {errorTextProps} prop stypes.ts参照
 * @returns {JSX.Element} コンポーネント
 */
export const ErrorText = ({ children }: errorTextProps) => {
  return <p className={Styles.text}>{children}</p>;
};
