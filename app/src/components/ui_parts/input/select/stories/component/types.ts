import { OptionProps } from "@/components/ui_elements/input/select_element/types";

export type SelectForSbProps = {
  name: string;
  label?: string;
  requirement?: boolean;
  supportText?: string;
  placeholder?: string;
  size?: "s" | "m" | "l";
  width?: string;
  id?: string;
  options?: OptionProps[];
  disabled?: boolean;
  errorAreaFixed?: boolean;
  creatable?: boolean;
};
