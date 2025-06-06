export type TextAreaElementForSbProps = {
  style?: React.CSSProperties;
  min_length?: number;
  max_length?: number;
  id?: string;
  size?: "s" | "m" | "l";
  rows?: number;
  cols?: number;
  disabled?: boolean;
  readonly?: boolean;
  fixed?: boolean;
};
