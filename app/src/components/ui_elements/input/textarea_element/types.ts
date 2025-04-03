import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

/**
 * <TextAreaElement/>プロパティ
 *
 * @property size コンポーネントサイズ
 * @property width max-widthプロパティ(未指定時width:auto)
 * @property id id属性
 * @property rows rows属性
 * @property cols cols属性
 * @property placeholder placeholder属性
 * @property defaultValue デフォルト値
 * @property readonly True=readonly
 * @property fixed textareaの可変許可の有無
 * @property register react-hook-form.register
 * @property errors registerエラー表示制御
 * @property handleBlur blur時イベント
 * @property handleChange change時イベント
 */
export type TextAreaElementProps<T extends FieldValues> = {
  size?: "s" | "m" | "l";
  width?: string;
  id?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  defaultValue?: string;
  readonly?: boolean;
  fixed?: boolean;
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  handleBlur?:
    | React.FocusEventHandler<HTMLTextAreaElement>[]
    | React.FocusEventHandler<HTMLTextAreaElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLTextAreaElement>[]
    | React.ChangeEventHandler<HTMLTextAreaElement>;
};
