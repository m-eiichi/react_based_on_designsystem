import type { Meta, StoryObj } from "@storybook/react";

import { RadioButtonIconForSb } from "./component/radio_button_for_sb";

const meta = {
  title: "ui_parts/input/RadioButton",
  component: RadioButtonIconForSb,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButtonIconForSb>;

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
