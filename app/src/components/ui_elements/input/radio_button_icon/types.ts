import { UseFormRegisterReturn } from "react-hook-form";

/**
 * <RadioButtonIcon/>プロパティ
 *
 * @property style - インラインスタイルの指定
 * @property register - react-hook-form の register() から得られるオブジェクト。
 *                      onChange / onBlur / disabled などのイベント・状態も含まれており、
 *                      これらは register 経由で一括管理することを推奨。
 *                      コンポーネント内部で個別に onChange や onBlur、disabled を扱うのではなく、
 *                      register をスプレッドすることで一貫したフォーム状態の管理を実現する。
 * @property id - input 要素の id 属性
 * @property value - input 要素の value 属性
 * @property readonly - 読み取り専用（UI 制御用）
 * @property error - バリデーションエラー時に true を設定
 */
export type RadioButtonIconProps = {
  register: UseFormRegisterReturn;
  style?: React.CSSProperties;
  id?: string;
  value?: string | number;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
};
