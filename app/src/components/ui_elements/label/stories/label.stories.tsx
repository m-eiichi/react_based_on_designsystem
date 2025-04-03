import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../";

const meta = {
  title: "ui_elements/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    text: "ラベル名",
    requirement: true,
  },
};
