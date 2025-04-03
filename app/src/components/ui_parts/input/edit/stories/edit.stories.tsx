import type { Meta, StoryObj } from "@storybook/react";

import { EditForSb } from "./component/edit_for_sb";

const meta = {
  title: "ui_parts/input/Edit",
  component: EditForSb,
  tags: ["autodocs"],
} satisfies Meta<typeof EditForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "ラベル",
    requirement: true,
    supportText: "サブテキスト",
    type: "text",
    // disabled: true,
  },
};
