import type { Meta, StoryObj } from "@storybook/react";
import { DialogHeader } from "../";

const meta = {
  title: "ui_parts/DialogHeader",
  component: DialogHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof DialogHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogHeader_sample: Story = {
  args: {
    title: "Dialog Header",
  },
};
