export type EditForSbZodProps = {
  type:
    | "number"
    | "text"
    | "tel"
    | "email"
    | "password"
    | "url"
    | "datetime-local"
    | "date";
  name?: string;
  readonly?: boolean;
  min?: number;
  max?: number;
  req_number?: boolean;
  req_char?: boolean;
  req_symbol?: boolean;
};

export type EditForSbProps = EditForSbZodProps & {
  label?: string;
  requirement?: boolean;
  supportText?: string;
  size?: "s" | "m" | "l";
  width?: string;
  disabled?: boolean;
  errorAreaFixed?: boolean;
};
