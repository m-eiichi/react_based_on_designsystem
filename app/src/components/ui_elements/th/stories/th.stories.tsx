import type { Meta, StoryObj } from "@storybook/react";
import { Th } from "../";

const meta = {
  title: "ui_elements/Th",
  component: Th,
  tags: ["autodocs"],
} satisfies Meta<typeof Th>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Th_sample: Story = {
  args: {
    children: "th",
  },
};
