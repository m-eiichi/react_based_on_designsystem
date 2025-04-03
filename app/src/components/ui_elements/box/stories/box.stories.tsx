import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Box } from "../";

const meta = {
  title: "ui_elements/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    borderRadius: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl", undefined],
    },
    m: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    mx: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    my: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    mt: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    mb: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    mr: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    ml: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    p: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    px: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    py: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    pt: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    pb: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    pr: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    pl: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    tbBorderRadius: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl", undefined],
    },
    tbM: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    tbMx: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbMy: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbMt: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbMb: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbMr: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbMl: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbP: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    tbPx: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbPy: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbPt: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbPb: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbPr: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    tbPl: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },

    pcBorderRadius: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", "xxl", undefined],
    },
    pcM: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    pcMx: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcMy: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcMt: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcMb: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcMr: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcMl: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcP: { control: "select", options: ["xs", "s", "m", "l", "xl", undefined] },
    pcPx: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcPy: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcPt: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcPb: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcPr: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
    pcPl: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl", undefined],
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Box_sample: Story = {
  args: { children: "Box" },
};

export const Box_sample_hover: Story = {
  args: {
    children: "Box",
    onClick: fn(),
  },
};
