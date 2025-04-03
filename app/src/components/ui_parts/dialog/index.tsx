import { useEffect, useRef, ReactElement, FC } from "react";
import { Portal } from "@/components/ui_parts/portal";
import { DialogProps } from "./types";
import Styles from "./dialog.module.css";

/**
 * <Dialog/>コンポーネント
 *
 * @description ダイアログコンポーネント
 * @param {DialogProps} types.ts参照
 * @returns {ReactElement | null} コンポーネント
 */
export const Dialog: FC<DialogProps> = ({
  noOverlay,
  isOpen = false,
  children,
}: DialogProps): ReactElement | null => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const dialogClasses = [
    Styles.dialog,
    noOverlay === true ? Styles.noOverlay : "",
  ].join(" ");

  useEffect(() => {
    const currentDialog = dialogRef.current;
    if (!currentDialog) return;

    // Escapeボタンで閉じる動作を防止
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    };

    // Dialogイベント登録
    currentDialog.addEventListener("keydown", handleKeyDown);

    // スクロール制御とモーダル表示
    if (isOpen) {
      currentDialog.showModal();
    } else {
      currentDialog.close();
    }

    // Cleanup
    return () => {
      currentDialog.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <Portal>
      <dialog className={dialogClasses} ref={dialogRef}>
        {isOpen && children}
      </dialog>
    </Portal>
  );
};
