import { OptionProps } from "../../types";

export type SelectElementForSbProps = {
  name: string;
  id?: string;
  size?: "s" | "m" | "l";
  width?: string;
  widthFixed?: boolean;
  options?: OptionProps[];
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  creatable?: boolean;
};
