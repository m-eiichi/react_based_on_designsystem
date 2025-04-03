import { FieldValues } from "react-hook-form";
import { EditElementProps } from "@/components/ui_elements/input/edit_element/types";

/**
 * <Edit/>プロパティ
 *
 * @property label <labe/>のテキスト
 * @property requirement True=必須アイコン表示
 * @property supportText 補足説明
 * @property errorAreaFixed True=エラーテキスト用の高さを常に保持
 */
export type EditProps<T extends FieldValues> = EditElementProps<T> & {
  label?: string;
  requirement?: boolean;
  supportText?: string;
  errorAreaFixed?: boolean;
};
