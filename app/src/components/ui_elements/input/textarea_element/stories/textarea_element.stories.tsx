import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaElementForSb } from "./component/textarea_element_for_sb";

const meta = {
  title: "ui_elements/input/TextAreaElement",
  component: TextAreaElementForSb,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TextAreaElementForSb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "test",
    size: "l",
    min_length: 1,
    max_length: 100,
  },
};
