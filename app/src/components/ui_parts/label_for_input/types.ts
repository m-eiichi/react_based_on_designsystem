/**
 * <LabelWithSupportText/>プロパティ
 *
 * @property text - ラベルのテキスト
 * @property requirement - ※（必須）の表示を制御
 * @property supportText - サポートテキスト
 * @property disabled - disabledを制御（ラベルの色のみ）
 * @property labelFor - labelのfor属性
 */

export type LabelForInputProps = {
  text?: string;
  requirement?: boolean;
  supportText?: string;
  disabled?: boolean;
  labelFor?: string;
};
