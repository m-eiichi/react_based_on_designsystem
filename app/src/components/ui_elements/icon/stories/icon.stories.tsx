import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../";

const meta = {
  title: "ui_elements/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon_sample: Story = {
  args: {
    src: "https://placehold.jp/64x64.png",
  },
};
