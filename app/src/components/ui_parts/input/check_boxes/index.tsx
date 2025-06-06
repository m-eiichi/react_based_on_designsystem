import { type ReactElement } from "react";
import { FieldValues } from "react-hook-form";
import { FlexContainer } from "@/components/ui_elements/flex_container";
import { LabelForInput } from "@/components/ui_parts/label_for_input";
import { CheckBox } from "@/components/ui_parts/input/check_box";
import { ErrorText } from "@/components/ui_elements/error_text";

import { CheckBoxesProps, CheckBoxesItemProps } from "./types";

/**
 * <CheckBoxes/>コンポーネント
 *
 * @description チェックボックスリストコンポーネント
 * @param {CheckBoxesProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const CheckBoxes = <T extends FieldValues>({
  size = "l",
  width,
  minWidth,
  label,
  requirement,
  supportText,
  tile,
  vertical,
  pcVertical,
  items,
  register,
  errors,
  errorAreaFixed,
  readonly,
}: CheckBoxesProps<T>): ReactElement => {
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
          items.map((item: CheckBoxesItemProps) => {
            return (
              <CheckBox
                size={size}
                key={item.id}
                id={item.id}
                value={item.value}
                text={item.text}
                subText={item.subText}
                checked={item.checked}
                disabled={item.disabled}
                tile={tile}
                error={errors && true}
                register={register}
                readonly={readonly || item.readonly}
                width={width || item.width}
                minWidth={minWidth || item.minWidth}
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
