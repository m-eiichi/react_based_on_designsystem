import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  FieldValues,
} from "react-hook-form";

import { RadioButtonProps } from "@/components/ui_parts/input/radio_button/types";

export type RadioButtonItemProps = Omit<RadioButtonProps, "register">;

/**
 * <RadioButtons/>プロパティ
 *
 * @property size コンポーネントサイズ
 * @property width widthプロパティ
 * @property minWidth min-widthプロパティ
 * @property label <label/>のテキスト
 * @property requirement True=必須アイコン表示
 * @property supportText 補足説明
 * @property errorAreaFixed True=エラーテキスト用の高さを常に保持
 * @property readonly True=Readonly
 * @property vertical チェックボックスの並びの向き
 * @property pcVertical チェックボックスの並びの向き(PC)
 * @property tile True=タイル型レイアウト
 * @property items チェックボックスアイテム
 * @property register react-hook-form.register
 * @property errors registerエラー表示制御
 * @property handleBlur Blur時イベント
 * @property handleChange change時イベント
 */

export type RadioButtonsProps<T extends FieldValues> = {
  size?: "s" | "m" | "l";
  width?: string;
  minWidth?: string;
  label?: string;
  requirement?: boolean;
  supportText?: string;
  errorAreaFixed?: boolean;
  readonly?: boolean;
  vertical?: "column" | "row";
  pcVertical?: "column" | "row";
  tile?: boolean;
  items?: RadioButtonItemProps[];
  register: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  handleBlur?:
    | React.FocusEventHandler<HTMLInputElement>[]
    | React.FocusEventHandler<HTMLInputElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement>[]
    | React.ChangeEventHandler<HTMLInputElement>;
};
