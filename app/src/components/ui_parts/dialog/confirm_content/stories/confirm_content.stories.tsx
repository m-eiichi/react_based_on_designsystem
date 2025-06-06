import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmContent } from "..";

const meta = {
  title: "ui_parts/ConfirmContent",
  component: ConfirmContent,
  tags: ["autodocs"],
} satisfies Meta<typeof ConfirmContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmContent_sample: Story = {
  args: {},
};
