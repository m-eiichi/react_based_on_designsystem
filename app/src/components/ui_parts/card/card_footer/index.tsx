import { type ReactElement } from "react";
import { Box } from "@/components/ui_elements/box/index.tsx";
import { FlexContainer } from "@/components/ui_elements/flex_container/index.tsx";
import { CardFooterProps } from "./types.ts";

export const CardFooter = ({ children }: CardFooterProps): ReactElement => {
  return (
    <Box borderRadius="none" padding="s">
      <FlexContainer gap="s">{children}</FlexContainer>
    </Box>
  );
};
