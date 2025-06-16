import { type ComponentType } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { z, ZodObject, ZodTypeAny } from "zod";

import { RadioButtonIcon } from "@/components/ui_elements/input/radio_button_icon";
import { type RadioButtonIconProps } from "@/components/ui_elements/input/radio_button_icon/types";

import { createAnyValidate } from "@/utils/validation";

// args で渡す用の Storybook 拡張型
type Args = RadioButtonIconProps & {
  registerDisabled?: boolean;
  defaultValue?: boolean;
};

const meta: Meta<Args> = {
  title: "ui_elements/input/RadioButtonIcon",
  component: RadioButtonIcon as ComponentType<Args>,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "object",
      description: "インラインスタイルを指定します。",
    },
    register: {
      description: `react-hook-form の register() の戻り値。<br>※Storybook 上では操作不要です。`,
      table: {
        readonly: true,
      },
    },
    id: {
      control: "text",
      description: "id 属性。label（htmlFor）と紐づけるために使用します。",
    },
    value: {
      control: "text",
      description: "value 属性を指定します。",
    },
    disabled: {
      control: "boolean",
      description:
        "無効化状態を切り替えます（UI 表示のみ制御します）。<br>※こちらはcheckbox単体用で、一括で制御する場合はregisterのdisabledで制御してください",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    readonly: {
      control: "boolean",
      description: "読み取り専用状態を表します（UI 表示のみ制御します）。",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    error: {
      control: "boolean",
      description:
        "バリデーションエラー時に true を指定するとエラースタイルになります。",
    },

    //Storybook用 props
    registerDisabled: {
      control: "boolean",
      description: "無効化状態を切り替えます（register に渡されます）。",
      table: {
        category: "Storybook用",
      },
    },
    defaultValue: {
      control: "boolean",
      description: "初期状態でチェックされているかどうかを指定します。",
      table: {
        category: "Storybook用",
      },
    },
  },
};

export default meta;

type Story = StoryObj<Args>;

export const RadioButtonIconSample: Story = {
  args: {
    style: {},
    id: "radiobutton-id",
    value: "1",
    readonly: false,
    error: false,
    disabled: false,
    registerDisabled: false,
    defaultValue: false,
  },
  render: ({ ...args }) => {
    const elm_name = "radio_button_icon_elm";
    const z_obj: ZodObject<{ [key: string]: ZodTypeAny }> = z.object({
      [elm_name]: createAnyValidate(),
    });

    type Schema = z.infer<typeof z_obj>;
    const { register } = useForm<Schema>({
      defaultValues: { [elm_name]: args.defaultValue },
      resolver: zodResolver(z_obj),
      mode: "onBlur",
    });
    return (
      <RadioButtonIcon
        {...args}
        register={register(elm_name, { disabled: args.registerDisabled })}
      />
    );
  },
};
