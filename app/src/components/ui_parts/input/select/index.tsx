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
  id,
  disabled,
  options,
  name,
  placeholder,
  defaultValue,
  creatable,
  label,
  supportText,
  requirement,
  errors,
  errorAreaFixed,
  handleChange,
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
        disabled={disabled}
      />
      <SelectElement
        name={name}
        size={size}
        id={id}
        error={errors ? true : false}
        options={options}
        defaultValue={defaultValue}
        creatable={creatable}
        disabled={disabled}
        handleChange={handleChange}
        placeholder={placeholder}
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
