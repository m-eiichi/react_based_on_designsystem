import { UseFormRegisterReturn } from "react-hook-form";

/**
 * <TextAreaElement/>プロパティ
 *
 * @property style - インラインスタイルの指定
 * @property register - react-hook-form の register() から得られるオブジェクト。
 *                      onChange / onBlur / disabled などのイベント・状態も含まれており、
 *                      これらは register 経由で一括管理することを推奨。
 *                      コンポーネント内部で個別に onChange や onBlur、disabled を扱うのではなく、
 *                      register をスプレッドすることで一貫したフォーム状態の管理を実現する。
 * @property id - textarea要素 の id 属性（label と紐づけるためなどに使う）
 * @property size - 入力フィールドのサイズ（"s"｜"m"｜"l"）
 * @property fullWidth - true の場合は幅を自動調整、false の場合は最大幅（width: 100%）
 * @property rows - textarea要素 の rows属性
 * @property cols - textarea要素 の cols属性
 * @property placeholder - プレースホルダに表示する文字列
 * @property readonly - true の場合は読み取り専用
 * @property fixed - textareaの可変許可の有無
 * @property error - バリデーションエラー時に true を設定
 */
export type TextAreaElementProps = {
  style?: React.CSSProperties;
  register: UseFormRegisterReturn;
  id?: string;
  size?: "s" | "m" | "l";
  fullWidth?: boolean;
  rows?: number;
  cols?: number;
  placeholder?: string;
  readonly?: boolean;
  fixed?: boolean;
  error?: boolean;
};
