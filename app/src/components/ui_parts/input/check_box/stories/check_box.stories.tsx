import type { Meta, StoryObj } from "@storybook/react";

import { CheckBoxForSb } from "./component/check_box_for_sb";

const meta = {
  title: "ui_parts/input/CheckBox",
  component: CheckBoxForSb,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckBoxForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    text: "ラベルテキスト",
    subText: "サブテキスト",
    value: "value",
  },
};
