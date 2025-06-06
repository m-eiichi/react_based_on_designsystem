import type { Meta, StoryObj } from "@storybook/react";
import { CardContents } from '../';

const meta = {
  title: 'ui_parts/CardContents',
  component: CardContents,
  tags: ["autodocs"],
} satisfies Meta<typeof CardContents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardContents_sample: Story = {
  args: {
  },
};
