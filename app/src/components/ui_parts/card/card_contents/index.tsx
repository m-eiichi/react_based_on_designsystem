import { type ReactElement } from "react";
import { Box } from "@/components/ui_elements/box/index.tsx";
import { FlexContainer } from "@/components/ui_elements/flex_container/index.tsx";
import { CardTitle } from "@/components/ui_parts/card/card_title";
import { CardDescription } from "@/components/ui_parts/card/card_description";
import { CardContentsProps } from "./types.ts";

export const CardContents = ({
  title,
  description,
  children,
}: CardContentsProps): ReactElement => {
  return (
    <Box p="s">
      <FlexContainer direction="column" gap="s">
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {children}
      </FlexContainer>
    </Box>
  );
};
