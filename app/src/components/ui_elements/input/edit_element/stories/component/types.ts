import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

export type EditElementForSbProps<T extends FieldValues> = {
  id?: string;
  size?: "s" | "m" | "l";
  width?: string;
  widthFixed?: boolean;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
  disabled?: boolean;
  readonly?: boolean;
};
