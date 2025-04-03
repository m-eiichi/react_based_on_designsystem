import { RadioButtonIconProps } from "@/components/ui_elements/input/radio_button_icon/types";

/**
 * <RadioButton/>プロパティ
 *
 * @property size コンポーネントサイズ
 * @property width widthプロパティ
 * @property minWidth min-widthプロパティ
 * @property text 内容
 * @property subText 補足説明
 * @property tile True=タイル型レイアウト
 */
export type RadioButtonProps = RadioButtonIconProps & {
  size?: "s" | "m" | "l";
  width?: string;
  minWidth?: string;
  text?: string;
  subText?: string;
  tile?: boolean;
};
