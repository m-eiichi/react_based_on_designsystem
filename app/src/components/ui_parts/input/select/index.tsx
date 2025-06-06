import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";
import { FlexContainer } from "@/components/ui_elements/flex_container";
import { LabelForInput } from "@/components/ui_parts/label_for_input";
import { SelectElement } from "@/components/ui_elements/input/select_element";
import { ErrorText } from "@/components/ui_elements/error_text";
import { SelectProps } from "./types";

/**
 * <Select/>コンポーネント
 *
 * @description セレクトコンポーネント
 * @param {SelectProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const Select = <T extends FieldValues>({
  size,
  name,
  disabled,
  readonly,
  label,
  supportText,
  requirement,
  errors,
  errorAreaFixed,
  ...rest
}: SelectProps<T>): ReactElement => {
  return (
    <FlexContainer
      direction="column"
      alignItems="stretch"
      gap={size === "s" ? "xs" : "s"}
    >
      <LabelForInput
        text={label}
        requirement={requirement}
        supportText={supportText}
        disabled={disabled || readonly}
        labelFor={name}
      />
      <SelectElement
        name={name}
        size={size}
        error={errors ? true : false}
        disabled={disabled}
        readonly={readonly}
        {...rest}
      />
      {errorAreaFixed === true ? (
        <ErrorText>{errors?.message as string}</ErrorText>
      ) : (
        errors != null && <ErrorText>{errors?.message as string}</ErrorText>
      )}
    </FlexContainer>
  );
};
