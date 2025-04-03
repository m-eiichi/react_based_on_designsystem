import { type ReactElement } from "react";

// jotai関連のインポート
import { useAtomValue } from "jotai";
import { useResetAtom } from "jotai/utils";
import { alertAtom } from "@/atoms";

// カスタムフック・コンポーネントのインポート
import { useDialog } from "@/hooks/useDialog.tsx";

// コンポーネントのインポート
import { DefaultDialogContent } from "@/components/ui_parts/dialog/default_dialog_content";
import { DialogButtonArea } from "@/components/ui_parts/dialog/dialog_button_area";

/**
 * <AlertContent/>コンポーネント
 *
 * @description
 * アラートダイアログの内容を表示し、「閉じる」ボタンのクリック時に適切な処理を実行する。
 *
 * @returns {ReactElement} コンポーネントの JSX
 */

export const AlertContent = (): ReactElement => {
  // ダイアログを閉じる関数を取得
  const { closeDialog } = useDialog();

  // アラートの状態を取得
  const alertData = useAtomValue(alertAtom);

  // アラートの状態をリセットする関数を取得
  const reset = useResetAtom(alertAtom);

  return (
    <DefaultDialogContent
      size="s"
      title={alertData.title ? alertData.title : "アラート"} // タイトルが設定されていない場合は「アラート」を表示
    >
      {alertData.children && alertData.children}
      <DialogButtonArea
        primaryButton={{
          children: "閉じる",
          onClick: () => {
            // alertValue.onClick が存在すればそれを実行
            alertData.onClick && alertData.onClick();
            closeDialog("alert");
            // アラートの状態をリセット
            reset();
          },
        }}
      />
    </DefaultDialogContent>
  );
};
