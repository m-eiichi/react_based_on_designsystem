import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

/**
 * <EditElement/>プロパティ
 *
 * @property size コンポーネントサイズ
 * @property width max-widthプロパティ
 * @property widthFixed の固定の有無
 * @property id id属性
 * @property placeholder placeholder属性
 * @property type type属性
 * @property multiple multiple属性
 * @property defaultValue デフォルト値
 * @property readonly True=readonly
 * @property numberSpin True=(type="number")時の矢印を表示
 * @property register react-hook-form.register
 * @property errors registerエラー表示制御
 * @property handleBlur Blur時イベント
 * @property handleChange change時イベント
 */
export type EditElementProps<T extends FieldValues> = {
  size?: "s" | "m" | "l";
  width?: string;
  widthFixed?: boolean;
  errorAreaFixed?: boolean;
  id?: string;
  placeholder?: string;
  type?:
    | "text"
    | "email"
    | "number"
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
    | "hidden";
  multiple?: boolean;
  defaultValue?: string;
  readonly?: boolean;
  numberSpin?: boolean;
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  handleBlur?:
    | React.FocusEventHandler<HTMLInputElement>[]
    | React.FocusEventHandler<HTMLInputElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement>[]
    | React.ChangeEventHandler<HTMLInputElement>;
};
