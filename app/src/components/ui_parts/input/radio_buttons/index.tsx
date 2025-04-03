// TODO defaultvalueへの対応

import { ReactElement } from "react";
import { FieldValues } from "react-hook-form";
import { FlexContainer } from "@/components/ui_elements/flex_container";
import { LabelForInput } from "../../label_for_input";
import { RadioButton } from "@/components/ui_parts/input/radio_button";
import { ErrorText } from "@/components/ui_elements/error_text";

import { RadioButtonsProps, RadioButtonItemProps } from "./types";

/**
 * <RadioButtons/>コンポーネント
 *
 * @description ラジオボタンリストコンポーネント
 * @param {RadioButtonsProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const RadioButtons = <T extends FieldValues>({
  size,
  width,
  minWidth,
  register,
  label,
  requirement,
  supportText,
  items,
  tile,
  vertical,
  pcVertical,
  readonly,
  errors,
  errorAreaFixed,
  handleBlur,
  handleChange,
}: RadioButtonsProps<T>): ReactElement => {
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
      <FlexContainer
        wrap="wrap"
        direction={vertical && vertical}
        pcDirection={pcVertical && pcVertical}
        alignItems="stretch"
        gap={tile ? "s" : size === "s" ? "m" : undefined}
        style={!tile && size !== "s" ? { gap: "24px 40px" } : undefined}
      >
        {items &&
          items.map((item: RadioButtonItemProps) => {
            return (
              <RadioButton
                size={size}
                key={item.id}
                id={item.id}
                value={item.value}
                text={item.text}
                subText={item.subText}
                checked={item.checked}
                disabled={item.disabled}
                readonly={readonly || item.readonly}
                tile={tile}
                error={errors && true}
                register={register}
                width={width || item.width}
                minWidth={minWidth || item.minWidth}
                //TODO handleBlur handleChange 共通化
                handleBlur={(e) => {
                  if (handleBlur) {
                    if (typeof handleBlur === "function") {
                      handleBlur(e);
                    } else {
                      handleBlur.forEach((blur_event) => blur_event(e));
                    }
                  }
                  if (item.handleBlur) {
                    if (typeof item.handleBlur === "function") {
                      item.handleBlur(e);
                    } else {
                      item.handleBlur.forEach((blur_event) => blur_event(e));
                    }
                  }
                }}
                handleChange={(e) => {
                  if (handleChange) {
                    if (typeof handleChange === "function") {
                      handleChange(e);
                    } else {
                      handleChange.forEach((change_event) => change_event(e));
                    }
                  }
                  if (item.handleChange) {
                    if (typeof item.handleChange === "function") {
                      item.handleChange(e);
                    } else {
                      item.handleChange.forEach((change_event) =>
                        change_event(e),
                      );
                    }
                  }
                }}
              />
            );
          })}
      </FlexContainer>
      {errorAreaFixed === true ? (
        <ErrorText>{errors?.message as string}</ErrorText>
      ) : (
        errors != null && <ErrorText>{errors?.message as string}</ErrorText>
      )}
    </FlexContainer>
  );
};
