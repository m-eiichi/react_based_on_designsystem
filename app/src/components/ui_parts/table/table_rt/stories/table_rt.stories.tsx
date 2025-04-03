import type { Meta, StoryObj } from "@storybook/react";

import { TableRForStorybook } from "./table_for_storybook";

const meta = {
  title: "ui_parts/table/table_rt",
  component: TableRForStorybook,
} satisfies Meta<typeof TableRForStorybook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    size: "m",
    fixedColumn: 1,
    tableHeight: "250px",
  },
};
