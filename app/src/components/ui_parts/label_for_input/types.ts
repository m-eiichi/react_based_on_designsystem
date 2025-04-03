/**
 * <LabelWithSupportText/>プロパティ
 *
 * @property　ラベルのテキスト
 * @property　※（必須）の表示を制御
 * @property　サポートテキスト
 * @property　disabledを制御（ラベルの色のみ）
 */

export type LabelForInputProps = {
  text?: string;
  requirement?: boolean;
  supportText?: string;
  disabled?: boolean;
};
