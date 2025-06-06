import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../";
import { CardHeader } from "../card_header";
import { CardImage } from "../card_image";
import { CardContents } from "../card_contents";
import { CardFooter } from "../card_footer";
import { Typography } from "@/components/ui_elements/typography";

const meta = {
  title: "ui_parts/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card_default: Story = {
  args: {
    onClick: () => {
      console.log();
    },
    children: (
      <>
        <CardHeader title="card title" subTitle="card sub title" />
        <CardImage src="https://placehold.jp/150x150.png" trim="rectangle" />
        <CardContents
          title="card content title"
          description="description description description description description description description"
        ></CardContents>
        <CardFooter>
          <Typography color="link" as="span" onClick={() => console.log()}>
            Read More
          </Typography>
          <Typography color="link" as="span" onClick={() => console.log()}>
            Read More
          </Typography>
        </CardFooter>
      </>
    ),
  },
};
