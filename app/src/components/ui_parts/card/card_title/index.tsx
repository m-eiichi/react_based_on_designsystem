import { type ReactElement } from "react";
import { Typography } from "@/components/ui_elements/typography/index.tsx";
import { CardTitleProps } from "./types.ts";

export const CardTitle = ({ children }: CardTitleProps): ReactElement => {
  return (
    <Typography as="h2" size="h6">
      {children}
    </Typography>
  );
};
