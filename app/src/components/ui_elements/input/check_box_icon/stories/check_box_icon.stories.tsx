import type { Meta, StoryObj } from "@storybook/react";

import { CheckBoxIconForSb } from "./component/check_box_icon_for_sb";

const meta = {
  title: "ui_elements/input/CheckBoxIcon",
  component: CheckBoxIconForSb,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof CheckBoxIconForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    value: "checkbox",
  },
};
