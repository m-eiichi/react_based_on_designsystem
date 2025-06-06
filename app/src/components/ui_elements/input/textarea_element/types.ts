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
 * @property style - 直書き用
 * @property size - コンポーネントサイズ
 * @property width - max-widthプロパティ(未指定時width:auto)
 * @property id - id属性
 * @property rows - rows属性
 * @property cols - cols属性
 * @property placeholder - placeholder属性
 * @property readonly - True=readonly
 * @property fixed - textareaの可変許可の有無
 * @property register - react-hook-form.register
 * @property errors - registerエラー表示制御
 */
export type TextAreaElementProps<T extends FieldValues> = {
  style?: React.CSSProperties;
  register: UseFormRegisterReturn;
  id?: string;
  size?: "s" | "m" | "l";
  rows?: number;
  cols?: number;
  placeholder?: string;
  readonly?: boolean;
  fixed?: boolean;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
};
