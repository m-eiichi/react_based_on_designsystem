import type { Meta, StoryObj } from "@storybook/react";
import { LabelForInput } from "..";

const meta = {
  title: "ui_parts/LabelForInput",
  component: LabelForInput,
  tags: ["autodocs"],
} satisfies Meta<typeof LabelForInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelForInput_sample: Story = {
  args: {},
};
