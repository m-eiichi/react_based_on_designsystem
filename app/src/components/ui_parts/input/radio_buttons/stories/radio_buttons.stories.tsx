import type { Meta, StoryObj } from "@storybook/react";

import { RadioButtonsForSb } from "./component/radio_buttons_for_sb";

const meta = {
  title: "ui_parts/input/RadioButtons",
  component: RadioButtonsForSb,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButtonsForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "checkbox",
    label: "ラベル",
    requirement: true,
    supportText: "サポートテキスト",
    size: "m",
    items: [
      {
        id: "1",
        value: "string1",
        text: "ラベル１",
        subText: "サブテキスト",
      },
      {
        id: "2",
        value: "string2",
        text: "ラベル２",
        subText: "サブテキスト",
      },
      {
        id: "3",
        value: "string3",
        text: "ラベル３",
        subText: "サブテキスト",
      },
    ],
  },
};
