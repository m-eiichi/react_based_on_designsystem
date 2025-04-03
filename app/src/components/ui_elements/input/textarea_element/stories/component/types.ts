export type TextAreaElementForSbProps = {
  min_length?: number;
  max_length?: number;
  id?: string;
  size?: "s" | "m" | "l";
  width?: string;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  readonly?: boolean;
  fixed?: boolean;
};
