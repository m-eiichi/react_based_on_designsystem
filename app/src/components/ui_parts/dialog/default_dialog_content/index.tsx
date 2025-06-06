import { useState, useEffect, useRef, ReactElement } from "react";
import { FlexContainer } from "@/components/ui_elements/flex_container";

import { DefaultDialogContentProps } from "./types";
import Styles from "./default_dialog_content.module.css";
import { DialogHeader } from "../dialog_header";

/**
 * <DefaultDialogContent /> コンポーネント
 *
 * @description
 * モーダルダイアログのコンテンツ部分を構成する共通コンポーネント。
 * ヘッダー (`DialogHeader`) を持ち、子要素として任意のコンテンツを配置可能。
 * ドラッグ操作による移動が可能で、Escapeキーでの閉じる動作を無効化。
 * デザインシステムに基づき、サイズ管理やレイアウトが統一されている。
 *
 * 基本的にダイアログを実装する際は本コンポーネントを使用することを推奨。
 * ただし、実装が難しい場合は使用しなくても問題ないが、その場合もデザインシステムのルールに従うこと。
 *
 * @param {DefaultDialogContentProps} props - ダイアログのサイズ、タイトル、子要素を指定
 * @returns {ReactElement} - ダイアログコンテンツの JSX 要素
 */

export const DefaultDialogContent = ({
  size = "l",
  title,
  children,
}: DefaultDialogContentProps): ReactElement => {
  const DefaultDialogContentRef = useRef<HTMLDivElement>(null);
  const dialogHeaderRef = useRef<HTMLDivElement>(null); // dialog直下のdiv要素のref
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // クラスの生成
  const dialogContentClasses = [
    Styles.dialog_content,
    Styles[`size_${size}`],
  ].join(" ");

  useEffect(() => {
    const currentDialog = DefaultDialogContentRef.current;
    const currentDialogHeader = dialogHeaderRef.current;
    if (!currentDialog || !currentDialogHeader) return;

    // Escapeボタンで閉じる動作を防止
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    };

    const handleMouseMove = (e: MouseEvent, margin: number = 40) => {
      if (!isDragging) return;

      const rect = currentDialog.getBoundingClientRect();
      const offsetX = e.clientX - dragStart.x;
      const offsetY = e.clientY - dragStart.y;

      const minX = margin - window.innerWidth / 2 - rect.width / 2;
      const maxX = window.innerWidth / 2 + rect.width / 2 - margin;
      const limitedX = Math.min(Math.max(offsetX, minX), maxX);

      const minY = -(window.innerHeight - rect.height) / 2 + margin;
      const maxY = window.innerHeight / 2 + rect.height / 2 - margin;
      const limitedY = Math.min(Math.max(offsetY, minY), maxY);

      setPosition({ x: limitedX, y: limitedY });
    };

    // ドラッグの状態（isDragging）をfalseにする
    const handleMouseUp = () => setIsDragging(false);

    // Dialogイベント登録
    currentDialog.addEventListener("keydown", handleKeyDown);
    currentDialogHeader.addEventListener("mousedown", handleMouseDown);

    // スクロール制御とモーダル表示

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Cleanup
    return () => {
      currentDialog.removeEventListener("keydown", handleKeyDown);
      currentDialogHeader.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, position]);

  return (
    <div
      className={dialogContentClasses}
      style={{
        ...(position.x !== null &&
        position.y !== null &&
        (position.x !== 0 || position.y !== 0)
          ? { transform: `translate(${position.x}px, ${position.y}px)` }
          : {}),
      }}
      ref={DefaultDialogContentRef}
    >
      <FlexContainer direction="column" containerType="inline-size">
        <DialogHeader title={title} dialogHeaderRef={dialogHeaderRef} />
        <FlexContainer
          direction="column"
          gap="l"
          pt="l"
          pb="s"
          px="s"
          tbPb="l"
          tbPx="xl"
        >
          {children}
        </FlexContainer>
      </FlexContainer>
    </div>
  );
};
