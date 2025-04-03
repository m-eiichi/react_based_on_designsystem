import type { Meta, StoryObj } from "@storybook/react";
import { AlertContent } from "..";

const meta = {
  title: "ui_parts/AlertContent",
  component: AlertContent,
  tags: ["autodocs"],
} satisfies Meta<typeof AlertContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertContent_sample: Story = {
  args: {},
};
