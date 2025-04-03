import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../";

const meta = {
  title: "ui_elements/Divider",
  component: Divider,
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary_L: Story = {
  args: {},
};
