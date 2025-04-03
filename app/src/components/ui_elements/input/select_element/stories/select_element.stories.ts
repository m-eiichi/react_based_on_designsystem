import type { Meta, StoryObj } from "@storybook/react";

import { SelectElementForSb } from "./component/select_elemant_for_sb";

const meta = {
  title: "ui_elements/input/SelectElement",
  component: SelectElementForSb,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectElementForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "select_element",
    options: [
      { label: "選択肢1", value: 1 },
      { label: "選択肢2", value: 2 },
      { label: "選択肢3", value: 3 },
    ],
    id: "select_element",
    placeholder: "プレイスホルダー",
    // defaultValueはRHF側で指定するのでここでは指定しない。
  },
};
