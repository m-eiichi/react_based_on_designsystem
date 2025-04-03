import type { Meta, StoryObj } from "@storybook/react";

import { EditElementForSb } from "./component/edit_element_for_sb";

const meta = {
  title: "ui_elements/input/EditElement",
  component: EditElementForSb,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof EditElementForSb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "test",
  },
};
