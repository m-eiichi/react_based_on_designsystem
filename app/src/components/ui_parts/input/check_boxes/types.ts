import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  FieldValues,
} from "react-hook-form";

import { CheckBoxProps } from "@/components/ui_parts/input/check_box/types";

export type CheckBoxesItemProps = Omit<CheckBoxProps, "register">;

/**
 * <CheckBoxes/>プロパティ
 *
 * @property size コンポーネントサイズ
 * @property width widthプロパティ
 * @property minWidth min-widthプロパティ
 * @property label <label/>のテキスト
 * @property requirement True=必須アイコン表示
 * @property supportText 補足説明
 * @property errorAreaFixed True=エラーテキスト用の高さを常に保持
 * @property vertical チェックボックスの並びの向き
 * @property pcVertical チェックボックスの並びの向き(PC)
 * @property tile True=タイル型レイアウト
 * @property items チェックボックスアイテム
 * @property register react-hook-form.register
 * @property readonly True=Readonly
 * @property errors registerエラー表示制御
 * @property handleBlur Blur時イベント
 * @property handleChange change時イベント
 */

export type CheckBoxesProps<T extends FieldValues> = {
  size?: "s" | "m" | "l";
  width?: string;
  minWidth?: string;
  label?: string;
  requirement?: boolean;
  supportText?: string;
  errorAreaFixed?: boolean;
  vertical?: "column" | "row";
  pcVertical?: "column" | "row";
  tile?: boolean;
  items?: CheckBoxesItemProps[];
  register: UseFormRegisterReturn;
  readonly?: boolean;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  handleBlur?:
    | React.FocusEventHandler<HTMLInputElement>[]
    | React.FocusEventHandler<HTMLInputElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement>[]
    | React.ChangeEventHandler<HTMLInputElement>;
};
