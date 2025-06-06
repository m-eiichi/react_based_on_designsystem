import type { Meta, StoryObj } from "@storybook/react";
import { CardHeader } from "../";

const meta = {
  title: "ui_parts/CardHeader",
  component: CardHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardHeader_sample: Story = {
  args: {
    title: "card title",
    subTitle: "card sub-title",
    icon: true,
  },
};
