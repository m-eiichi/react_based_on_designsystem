import { type ReactElement } from "react";
import { Box } from "@/components/ui_elements/box/index.tsx";
import { FlexContainer } from "@/components/ui_elements/flex_container/index.tsx";
import { Icon } from "@/components/ui_elements/icon";
import { Typography } from "@/components/ui_elements/typography";
import { CardHeaderProps } from "./types.ts";
import { CardTitle } from "../card_title/index.tsx";

export const CardHeader = ({
  iconSrc,
  title,
  subTitle,
  optionButton,
}: CardHeaderProps): ReactElement => {
  return (
    <Box borderRadius="none" padding="s">
      <FlexContainer justifyContent="between">
        <FlexContainer gap="m" wrap="wrap">
          {iconSrc ? <Icon size="m" src={iconSrc} type="circle" /> : ""}
          <FlexContainer direction="column" width="calc(100% - 64px)">
            <CardTitle>{title}</CardTitle>
            <Typography size="subtitle2" weight="normal">
              {subTitle}
            </Typography>
          </FlexContainer>
        </FlexContainer>
        {optionButton && <>…</>}
      </FlexContainer>
    </Box>
  );
};
