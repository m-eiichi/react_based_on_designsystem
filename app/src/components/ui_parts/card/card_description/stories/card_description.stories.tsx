import type { Meta, StoryObj } from "@storybook/react";
import { CardDescription } from "../";

const meta = {
  title: "ui_parts/CardDescription",
  component: CardDescription,
  tags: ["autodocs"],
} satisfies Meta<typeof CardDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDescription_sample: Story = {
  args: {
    children: "description",
  },
};
