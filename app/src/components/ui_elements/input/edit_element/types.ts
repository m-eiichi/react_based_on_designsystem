import { UseFormRegisterReturn } from "react-hook-form";

/** `type` プロパティの型を別の型エイリアスとして定義 */
export type InputType =
  | "text"
  | "email"
  | "password"
  | "search"
  | "tel"
  | "url"
  | "week"
  | "month"
  | "datetime-local"
  | "date"
  | "time"
  | "color"
  | "file"
  | "range"
  | "hidden"
  | "number";

/** `type` に応じた追加プロパティを定義 */
export type TypeConfig<T extends InputType> = T extends "number"
  ? { type: "number"; numberSpin?: boolean; multiple?: never }
  : T extends "email" | "file"
    ? { type: T; numberSpin?: never; multiple?: boolean }
    : {
        type?: Exclude<InputType, "number" | "email" | "file">;
        numberSpin?: never;
        multiple?: never;
      };

export type EditBaseProps = {
  style?: React.CSSProperties;
  register: UseFormRegisterReturn;
  id?: string;
  size?: "s" | "m" | "l";
  fullWidth?: boolean;
  placeholder?: string;
  readonly?: boolean;
};

/**
 * @property style - インラインスタイルの指定
 * @property register - react-hook-form の register() から得られるオブジェクト。
 *                      onChange / onBlur / disabled などのイベント・状態も含まれており、
 *                      これらは register 経由で一括管理することを推奨。
 *                      コンポーネント内部で個別に onChange や onBlur、disabled を扱うのではなく、
 *                      register をスプレッドすることで一貫したフォーム状態の管理を実現する。
 * @property id - input 要素の id 属性（label と紐づけるためなどに使う）
 * @property size - 入力フィールドのサイズ（"s"｜"m"｜"l"）
 * @property fullWidth - true の場合は幅を自動調整、false の場合は最大幅（width: 100%）
 * @property placeholder - プレースホルダに表示する文字列
 * @property readonly - true の場合は読み取り専用
 * @property error - バリデーションエラー時に true を設定
 * @property type - input 要素の type（例："text"、"email"、"number" など）
 * @property numberSpin - type="number" の場合にスピンボタンを表示するか（省略時は非表示）
 * @property multiple - type="email" または "file" の場合に複数選択を許可するか
 */

export type EditElementProps<T extends InputType = InputType> =
  EditBaseProps & {
    error?: boolean;
  } & TypeConfig<T>;
