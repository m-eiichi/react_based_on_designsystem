import { type ReactElement } from "react";
import { type FieldValues } from "react-hook-form";
import { FlexContainer } from "@/components/ui_elements/flex_container";
import { LabelForInput } from "@/components/ui_parts/label_for_input";
import { TextAreaElement } from "@/components/ui_elements/input/textarea_element";
import { ErrorText } from "@/components/ui_elements/error_text";
import { TextAreaProps } from "./types";

/**
 * <TextArea/>コンポーネント
 *
 * @description テキストエリアコンポーネント
 * @param {TextAreaProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const TextArea = <T extends FieldValues>({
  id,
  size,
  errorAreaFixed,
  label,
  requirement,
  supportText,
  register,
  readonly,
  errors,
  ...rest
}: TextAreaProps<T>): ReactElement => {
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
      />
      <TextAreaElement
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
