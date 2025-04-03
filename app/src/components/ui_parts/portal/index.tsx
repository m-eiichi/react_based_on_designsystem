import { createPortal } from "react-dom";
import { PortalProps } from "./types";

/**
 * <Portal/>コンポーネント
 *
 * @description React外のDOMノードにReactコンポーネントを描画するコンポーネント
 * @param {PortalProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const Portal = ({ children }: PortalProps) => {
  return createPortal(children, document.body);
};
