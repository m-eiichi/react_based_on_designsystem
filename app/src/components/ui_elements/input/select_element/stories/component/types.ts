import { OptionProps } from "../../types";

export type SelectElementForSbProps = {
  name: string;
  size?: "s" | "m" | "l";
  width?: string;
  widthFixed?: boolean;
  options?: OptionProps[];
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  creatable?: boolean;
};
