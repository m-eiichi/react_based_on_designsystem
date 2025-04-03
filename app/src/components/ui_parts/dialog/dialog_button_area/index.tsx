import { ReactElement } from "react";
import { Button } from "@/components/ui_elements/button";
import { DialogButtonAreaProps } from "./types";
import Styles from "./dialog_button_area.module.css";

/**
 * <DialogButtonArea /> コンポーネント
 *
 * @description
 * ダイアログ内のボタンエリアを構成するコンポーネント。
 * 主ボタン（primaryButton）と副ボタン（secondaryButton）を表示する。
 * primaryButton は必須で、secondaryButton はオプション。
 *
 * @param {DialogButtonAreaProps} props - 主ボタンおよび副ボタンのプロパティを指定
 * primaryButton と secondaryButton には children（ボタンテキスト）と onClick（クリック時の挙動）を指定。
 * @returns {ReactElement} - ダイアログのボタンエリアを表す JSX 要素
 */

export const DialogButtonArea = ({
  primaryButton,
  secondaryButton,
}: DialogButtonAreaProps): ReactElement => {
  return (
    <div className={Styles.button_container}>
      <Button fullWidth onClick={primaryButton.onClick}>
        {primaryButton.children}
      </Button>
      {secondaryButton && (
        <Button color="secondary" fullWidth onClick={secondaryButton.onClick}>
          {secondaryButton.children}
        </Button>
      )}
    </div>
  );
};
