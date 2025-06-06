import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

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
type TypeConfig<T extends InputType> = T extends "number"
  ? { type: "number"; numberSpin?: boolean; multiple?: never }
  : T extends "email" | "file"
    ? { type: T; numberSpin?: never; multiple?: boolean }
    : {
        type?: Exclude<InputType, "number" | "email" | "file">;
        numberSpin?: never;
        multiple?: never;
      };

/**
 * <EditElement /> プロパティ
 *
 * @property size - 入力フィールドのサイズ（"s"｜"m"｜"l"）
 * @property width - 入力フィールドの幅（CSSの幅指定文字列、例："200px"）
 * @property widthFixed - true の場合は固定幅、false の場合は最大幅（max-width）
 * @property id - input 要素の id 属性
 * @property placeholder - プレースホルダに表示する文字列
 * @property readonly - true の場合は読み取り専用
 * @property register - react-hook-form の register 関数の戻り値
 * @property errors - バリデーションエラーオブジェクト（react-hook-form 由来）
 * @property type - input 要素の type（例："text"、"email"、"number" など）
 * @property numberSpin - type="number" の場合にスピンボタンを表示するかどうか（省略時は非表示）
 * @property multiple - type="email" または "file" の場合に複数選択を許可するかどうか
 */

export type EditElementProps<
  T extends FieldValues,
  U extends InputType = InputType,
> = {
  size?: "s" | "m" | "l";
  width?: string;
  widthFixed?: boolean;
  id?: string;
  placeholder?: string;
  readonly?: boolean;
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
} & TypeConfig<U>;
