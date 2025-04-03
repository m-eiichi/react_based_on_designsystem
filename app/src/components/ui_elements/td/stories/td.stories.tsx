import type { Meta, StoryObj } from "@storybook/react";
import { Td } from "../";

const meta = {
  title: "ui_elements/Td",
  component: Td,
  tags: ["autodocs"],
} satisfies Meta<typeof Td>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Td_sample: Story = {
  args: {
    children: "td",
    as: "div",
  },
};
