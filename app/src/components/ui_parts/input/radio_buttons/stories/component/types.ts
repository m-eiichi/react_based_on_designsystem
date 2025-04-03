import { RadioButtonItemProps } from "@/components/ui_parts/input/radio_buttons/types";

export type RadioButtonsRhfForSbProps = {
  label?: string;
  requirement?: boolean;
  supportText?: string;
  size?: "s" | "m" | "l";
  width?: string;
  minWidth?: string;
  name: string;
  items: RadioButtonItemProps[];
  vertical?: "column" | "row";
  pcVertical?: "column" | "row";
  tile?: boolean;
  disabled?: boolean;
  readonly?: boolean;
};
