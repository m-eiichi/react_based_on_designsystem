import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

import { SelectElementProps } from "@/components/ui_elements/input/select_element/types";

/**
 * <Select/>プロパティ
 *
 * @property label <label/>のテキスト
 * @property requirement True=必須アイコン表示
 * @property supportText 補足説明
 * @property errorAreaFixed True=エラーテキスト用の高さを常に保持
 * @property errors registerエラー表示制御
 */
export type SelectProps<T extends FieldValues> = SelectElementProps & {
  label?: string;
  requirement?: boolean;
  supportText?: string;
  errorAreaFixed?: boolean;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined;
};
