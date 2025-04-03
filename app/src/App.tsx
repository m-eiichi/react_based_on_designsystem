import { RouterConfig } from "./routes/RouterConfig"; // ルーティング設定を管理するコンポーネント
import { useDialog } from "@/hooks/useDialog.tsx"; // カスタムフック（ダイアログ管理）
import { AlertContent } from "./components/ui_parts/dialog/alert_content"; // アラートダイアログのコンテンツ
import { type ReactElement } from "react";

/**
 * <App /> コンポーネント
 *
 * @description
 * - アプリケーション全体のエントリーポイントとなるコンポーネント
 * - ルーティング設定 (`RouterConfig`) を適用
 * - グローバルに使用するアラートダイアログ (`AlertContent`) を配置
 *
 * @returns {ReactElement} JSXコンポーネント
 */

function App(): ReactElement {
  // ダイアログ管理用のカスタムフックを呼び出し
  const { Dialog } = useDialog();

  return (
    <>
      {/* ルーティングを管理するコンポーネント */}
      <RouterConfig />

      {/* アラートダイアログの定義 */}
      <Dialog id={"alert"}>
        <AlertContent />
      </Dialog>
    </>
  );
}

export default App;
