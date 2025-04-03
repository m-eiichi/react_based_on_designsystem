import type { Meta, StoryObj } from "@storybook/react";

import { ProgressIndicator } from "../";

const meta = {
  title: "ui_parts/ProgressIndicator",
  component: ProgressIndicator,
  args: {
    label: "label",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spiner: Story = {};
