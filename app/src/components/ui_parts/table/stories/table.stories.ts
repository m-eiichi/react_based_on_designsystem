import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "../";

const meta = {
  title: "ui_parts/table/table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    size: "m",
    data: {
      header: ["123", "123", "123", "123", "123"],
      column: [
        [123, 123, 123, 123, 123],
        [123, 123, 123, "", 123],
        [123, 123, 123, 123, 123],
        [123, 123, 123, 123, 123],
        [123, 123, 123, 123, 123],
      ],
    },
    tableHeight: "250px",
  },
};
