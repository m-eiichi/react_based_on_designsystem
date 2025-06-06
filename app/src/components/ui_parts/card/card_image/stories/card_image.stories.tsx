import type { Meta, StoryObj } from "@storybook/react";
import { CardImage } from '../';

const meta = {
  title: 'ui_parts/CardImage',
  component: CardImage,
  tags: ["autodocs"],
} satisfies Meta<typeof CardImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardImage_sample: Story = {
  args: {
  },
};
