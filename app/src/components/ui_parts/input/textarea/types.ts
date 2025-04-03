import { FieldValues } from "react-hook-form";
import { TextAreaElementProps } from "@/components/ui_elements/input/textarea_element/types";

/**
 * <TextArea/>プロパティ
 *
 * @property label <label/>のテキスト
 * @property requirement True=必須アイコン表示
 * @property supportText 補足説明
 * @property errorAreaFixed True=エラーテキスト用の高さを常に保持
 */
export type TextAreaProps<T extends FieldValues> = TextAreaElementProps<T> & {
  label?: string;
  requirement?: boolean;
  supportText?: string;
  errorAreaFixed?: boolean;
};
