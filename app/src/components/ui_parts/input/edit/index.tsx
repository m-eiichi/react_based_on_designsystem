import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";
import { FlexContainer } from "@/components/ui_elements/flex_container";
import { LabelForInput } from "@/components/ui_parts/label_for_input";
import { ErrorText } from "@/components/ui_elements/error_text";
import { EditElement } from "@/components/ui_elements/input/edit_element";
import { EditProps } from "./types";

/**
 * <Edit/>コンポーネント
 *
 * @description inputコンポーネント
 * @param {EditProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const Edit = <T extends FieldValues>({
  size,
  label,
  requirement,
  supportText,
  id,
  errorAreaFixed,
  register,
  readonly,
  errors,
  ...rest
}: EditProps<T>): ReactElement => {
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
        disabled={register.disabled || readonly}
        labelFor={id}
      />
      <EditElement
        size={size}
        id={id}
        register={register}
        readonly={readonly}
        errors={errors}
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
