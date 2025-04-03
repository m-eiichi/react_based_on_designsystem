---
to: "<%= require_storybook ? `${path}/stories/${component_name}.stories.tsx` : null %>"
---

import type { Meta, StoryObj } from "@storybook/react";
import { <%= h.changeCase.pascal(component_name) %> } from '../';

const meta = {
  title: '<%= category %>/<%= h.changeCase.pascal(component_name) %>',
  component: <%= h.changeCase.pascal(component_name) %>,
  tags: ["autodocs"],
} satisfies Meta<typeof <%= h.changeCase.pascal(component_name) %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const <%= h.changeCase.pascal(component_name) %>_sample: Story = {
  args: {
  },
};
