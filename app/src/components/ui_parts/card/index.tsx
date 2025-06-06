import { Box } from "@/components/ui_elements/box";
import { CardProps } from "./types";

export const Card = ({ onClick, children }: CardProps) => {
  const hoverShadow = true; // または適切な値
  return (
    <Box
      shadow
      padding="none"
      borderRadius="s"
      maxWidth="740px"
      containerType="normal"
      onClick={onClick}
      {...(onClick && { hoverShadow })}
    >
      {children}
    </Box>
  );
};
