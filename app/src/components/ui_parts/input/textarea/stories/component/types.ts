export type TextAreaForSbProps = {
  min_length?: number;
  max_length?: number;

  id?: string;
  size?: "s" | "m" | "l";
  width?: string;
  label?: string;
  requirement?: boolean;
  supportText?: string;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  readonly?: boolean;
  fixed?: boolean;
  errorAreaFixed?: boolean;
};
