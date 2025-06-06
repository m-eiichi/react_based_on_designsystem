import { type ReactElement } from "react";
import { Typography } from "@/components/ui_elements/typography/index.tsx";
import { CardDescriptionProps } from "./types.ts";

export const CardDescription = ({
  children,
}: CardDescriptionProps): ReactElement => {
  return <Typography color="description">{children}</Typography>;
};
