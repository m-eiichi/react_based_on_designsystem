import type { Meta, StoryObj } from "@storybook/react";

import { TextareaForSb } from "./component/textarea_for_sb";

const meta = {
  title: "ui_parts/input/TextArea",
  component: TextareaForSb,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TextareaForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "l",
    label: "ラベル",
    requirement: true,
    supportText: "サブテキスト",
    id: "test",
  },
};
