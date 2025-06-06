import { type ReactElement } from "react";

// jotai関連のインポート
import { useAtomValue } from "jotai";
import { useResetAtom } from "jotai/utils";
import { confirmAtom } from "@/atoms";

// カスタムフック・コンポーネントのインポート
import { useDialog } from "@/hooks/useDialog.tsx";

// コンポーネントのインポート
import { DefaultDialogContent } from "@/components/ui_parts/dialog/default_dialog_content";
import { DialogButtonArea } from "@/components/ui_parts/dialog/dialog_button_area";

/**
 * <ConfirmContent/>コンポーネント
 *
 * @description
 * ダイアログの内容を表示し、「OK」または「閉じる」ボタンのクリック時に適切な処理を実行する。
 *
 * @returns {ReactElement} コンポーネントの JSX
 */

export const ConfirmContent = (): ReactElement => {
  // ダイアログを閉じる関数を取得
  const { closeDialog } = useDialog();

  // 状態を取得
  const confirmData = useAtomValue(confirmAtom);

  // 状態をリセットする関数を取得
  const reset = useResetAtom(confirmAtom);

  return (
    <DefaultDialogContent
      size="s"
      title={confirmData.title ? confirmData.title : "確認"} // タイトルが設定されていない場合は「確認」を表示
    >
      {confirmData.children}
      <DialogButtonArea
        primaryButton={{
          children: "OK",
          onClick: () => {
            // alertValue.onClick が存在すればそれを実行
            confirmData.onPositiveClick && confirmData.onPositiveClick();
            closeDialog("confirm");
            // 状態をリセット
            reset();
          },
        }}
        secondaryButton={{
          children: "キャンセル",
          onClick: () => {
            // alertValue.onClick が存在すればそれを実行
            confirmData.onNegativeClick && confirmData.onNegativeClick();
            closeDialog("confirm");
            // 状態をリセット
            reset();
          },
        }}
      />
    </DefaultDialogContent>
  );
};
