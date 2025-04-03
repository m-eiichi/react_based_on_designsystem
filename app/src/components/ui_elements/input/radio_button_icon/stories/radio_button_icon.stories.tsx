import type { Meta, StoryObj } from "@storybook/react";

import { RadioButtonIconForSb } from "./component/radio_button_icon_for_sb";

const meta = {
  title: "ui_elements/input/RadioButtonIcon",
  component: RadioButtonIconForSb,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof RadioButtonIconForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    value: "radiobutton",
  },
};
