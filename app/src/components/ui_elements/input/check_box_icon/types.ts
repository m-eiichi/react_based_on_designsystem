import { UseFormRegisterReturn } from "react-hook-form";

/**
 * <CheckBoxIcon/>プロパティ
 *
 * @property id id属性
 * @property value value属性
 * @property checked True=チェックON
 * @property disabled True=disabled
 * @property readonly True=Readonly
 * @property register react-hook-form.register
 * @property error True=エラーあり
 * @property handleBlur Blur時イベント
 * @property handleChange change時イベント
 */
export type CheckBoxIconProps = {
  id: string;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  register: UseFormRegisterReturn;
  error?: boolean;
  handleBlur?:
    | React.FocusEventHandler<HTMLInputElement>[]
    | React.FocusEventHandler<HTMLInputElement>;
  handleChange?:
    | React.ChangeEventHandler<HTMLInputElement>[]
    | React.ChangeEventHandler<HTMLInputElement>;
};
