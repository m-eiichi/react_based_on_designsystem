import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../";

const meta = {
  title: "ui_elements/Typography",
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1_Typography: Story = {
  args: {
    size: "h1",
    children: "Typography",
  },
};
