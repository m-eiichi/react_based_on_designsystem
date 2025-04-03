import { ReactNode } from "react";

/**
 * <Dialog/>プロパティ
 *
 * @property noOverlay True=背景をグレーアウトに着色
 * @property isOpen True=ダイアログ表示
 * @property children 子要素
 */
export type DialogProps = {
  noOverlay?: boolean;
  isOpen?: boolean;
  children?: ReactNode;
};
