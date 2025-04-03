import { CheckBoxesItemProps } from "@/components/ui_parts/input/check_boxes/types";

export type CheckBoxesForSbProps = {
  min?: number;
  max?: number;
  label?: string;
  requirement?: boolean;
  supportText?: string;
  size?: "s" | "m" | "l";
  width?: string;
  minWidth?: string;
  name: string;
  items: CheckBoxesItemProps[];
  vertical?: "column" | "row";
  pcVertical?: "column" | "row";
  tile?: boolean;
  disabled?: boolean;
  errorAreaFixed?: boolean;
  readonly?: boolean;
};
