import type { Meta, StoryObj } from "@storybook/react";

import { CheckBoxesForSb } from "./component/check_boxes_for_sb";

const meta = {
  title: "ui_parts/input/CheckBoxes",
  component: CheckBoxesForSb,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckBoxesForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 1,
    max: 2,
    label: "ラベル",
    requirement: true,
    supportText: "サポートテキスト",
    size: "m",
    name: "test",
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
