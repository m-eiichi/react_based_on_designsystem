import { type ComponentType, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectElement } from "@/components/ui_elements/input/select_element";
import { SelectElementProps } from "@/components/ui_elements/input/select_element/types";
import { useCustomForm } from "@/hooks/useCustomForm";
import { FormProvider } from "react-hook-form";
import { z, ZodObject, ZodTypeAny } from "zod";
import { createSelectValidate } from "@/utils/validation";

// args で渡す用の Storybook 拡張型
type Args = SelectElementProps & {
  defaultValue?: string;
};

const meta: Meta<Args> = {
  title: "ui_elements/input/SelectElement",
  component: SelectElement as ComponentType<Args>,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description:
        "フォームフィールド名。React Hook Form と連携するために使用<br>(このnameをキーとしてフォームの値やバリデーションが管理されます）",
    },
    id: {
      control: "text",
      description: "id 属性（label と紐づける際などに使用）",
    },
    options: {
      control: "object",
      description: "選択肢の配列。各 option の表示名・値を定義（label/value）",
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
      description: "要素のサイズを選択します。",
      table: {
        defaultValue: { summary: "l" },
      },
    },
    width: {
      control: "text",
      description:
        "幅の指定に使用します。<br>※fullWidthがtrueの場合はmax-width、falseの場合はwidthを指定します。",
    },
    fullWidth: {
      control: "boolean",
      description:
        "幅(auto/100%)の指定に使用します。<br>※auto/100%以外の値を指定したい場合はstyle propsを使用してください。",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    placeholder: {
      control: "text",
      description: "プレイスホルダーの表示に使用します。",
    },
    disabled: {
      control: "boolean",
      description: "無効化状態を切り替えます（UI 表示のみ制御します）。",
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
        "バリデーションエラーオブジェクト。エラースタイルの表示に使用されます。",
    },
    onChange: {
      control: false,
      description: "値変更時のイベントハンドラ（選択値を引数に受け取る）",
      table: {
        type: {
          summary:
            "(value: string | number | (string | number)[] | null) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onBlur: {
      control: false,
      description:
        "フォーカスが外れた際のイベントハンドラ（選択値を引数に受け取る）",
      table: {
        type: {
          summary:
            "(value: string | number | (string | number)[] | null) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    creatable: {
      control: "boolean",
      description: "true の場合は自由入力を許可（未定義の値も入力可能に）",
    },
    defaultValue: {
      control: "text",
      description:
        "初期値として select に選択される値を指定します。<br>※Storybook 上のみの props です。",
      table: {
        category: "Storybook用",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectElementSample: Story = {
  args: {
    name: "select_element",
    defaultValue: "",
    width: "200px",
    options: [
      { label: "未選択", value: "" },
      { label: "選択肢1", value: 1 },
      { label: "選択肢2", value: 2 },
      { label: "選択肢3", value: 3 },
    ],
    placeholder: "未選択",
  },

  render: ({ ...args }) => {
    const schema: ZodObject<{ [key: string]: ZodTypeAny }> = z.object({
      [args.name]: createSelectValidate({ name: args.name, min: 0 }),
    });

    const methods = useCustomForm(schema, {
      defaultValues: { [args.name]: args.defaultValue },
      mode: "onChange",
    });
    const {
      trigger,
      formState: { errors },
    } = methods;

    useEffect(() => {
      methods.trigger(args.name);
    }, [trigger, args.name, methods]);

    return (
      <FormProvider {...methods}>
        <SelectElement {...args} error={args.error ?? !!errors[args.name]} />
      </FormProvider>
    );
  },
};
