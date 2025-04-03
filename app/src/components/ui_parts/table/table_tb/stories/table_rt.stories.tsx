import type { Meta, StoryObj } from "@storybook/react";
import { TableTB } from "..";

const meta = {
  title: "ui_parts/table/table_tb",
  component: TableTB,
} satisfies Meta<typeof TableTB>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    data: [
      { id: 1, name: "John Doe", age: 30 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
      { id: 2, name: "Jane Smith", age: 25 },
    ],
    columns: [
      {
        title: "ID",
        field: "id",
        sorter: "number",
      },
      {
        title: "Name",
        field: "name",
        sorter: "string",
      },
      {
        title: "Age",
        field: "age",
        sorter: "number",
      },
    ],
    size: "m",
    rowDblClick: (event, row) => {
      console.log(event, row);
    },
  },
};
