import { UseFormRegisterReturn } from "react-hook-form";

/**
 * <RadioButtonIcon/>プロパティ
 *
 * @property style - 直書き用
 * @property id - id属性
 * @property value - value属性
 * @property checked - True=チェックON
 * @property disabled - True=disabled
 * @property readonly - True=Readonly
 * @property register - react-hook-form.register
 * @property error - True=エラーあり
 */
export type RadioButtonIconProps = {
  style?: React.CSSProperties;
  id?: string;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  register: UseFormRegisterReturn;
  error?: boolean;
};
