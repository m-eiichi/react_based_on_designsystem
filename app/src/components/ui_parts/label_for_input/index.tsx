import { type ReactElement } from "react";
import { FlexContainer } from "@/components/ui_elements/flex_container/index.tsx";
import { Label } from "@/components/ui_elements/label/index.tsx";
import { SupportText } from "@/components/ui_elements/support_text/index.tsx";
import { LabelForInputProps } from "./types.ts";

/**
 * <LabelForInput/>コンポーネント
 *
 * @description Inputコンポーネント用のラベル
 * @param {LabelForInputProps} types.ts参照
 * @returns {ReactElement | null} コンポーネント
 */

export const LabelForInput = ({
  text,
  requirement,
  supportText,
  disabled,
}: LabelForInputProps): ReactElement => {
  return (
    <>
      {text || requirement ? (
        supportText ? (
          // labelかrequirementが存在して、かつsupportTextが存在する場合
          <FlexContainer direction="column" alignItems="start" gap="xs">
            <Label text={text} requirement={requirement} disabled={disabled} />
            <SupportText disabled={disabled}>{supportText}</SupportText>
          </FlexContainer>
        ) : (
          // labelかrequirementが存在して、かつsupportTextが存在しない場合
          <Label text={text} requirement={requirement} disabled={disabled} />
        )
      ) : (
        // supportTextのみ存在する場合
        supportText && (
          <SupportText disabled={disabled}>{supportText}</SupportText>
        )
      )}
    </>
  );
};

{
}
