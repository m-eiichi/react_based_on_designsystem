import type { Meta, StoryObj } from "@storybook/react";

import { SelectForSb } from "./component/select_for_sb";

const meta = {
  title: "ui_parts/input/Select",
  component: SelectForSb,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "select",
    label: "ラベル",
    requirement: true,
    supportText: "サポートテキスト",
    placeholder: "プレイスホルダー",
    options: [
      { label: "選択肢1", value: "1" },
      { label: "選択肢2", value: "2" },
      { label: "選択肢3", value: "3" },
    ],
    id: "select",
    // defaultValueはRHF側で指定するのでここでは指定しない。
  },
};
