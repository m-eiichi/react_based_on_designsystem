import { type ComponentType, useEffect } from "react";
import { useCustomForm } from "@/hooks/useCustomForm";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { z, ZodObject, ZodTypeAny } from "zod";
import { TextAreaElement } from "@/components/ui_elements/input/textarea_element";
import type { TextAreaElementProps } from "@/components/ui_elements/input/textarea_element/types";
import { createTextValidate } from "@/utils/validation";

// // args で渡す用の Storybook 拡張型
type Args = TextAreaElementProps & {
  disabled?: boolean;
  defaultValue?: string;
  validationMin?: number;
  validationMax?: number;
};

const meta: Meta<Args> = {
  title: "ui_elements/input/TextAreaElement",
  component: TextAreaElement as ComponentType<Args>,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "object",
      description: "インラインスタイルを指定します。",
    },
    register: {
      description:
        "react-hook-form の register() の戻り値。<br>※Storybook 上では操作不要です。",
      table: {
        readonly: true,
      },
    },
    id: {
      control: "text",
      description: "id 属性。label（htmlFor）と紐づけるために使用します。",
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
      description: "要素のサイズを選択します。",
      table: {
        defaultValue: { summary: "l" },
      },
    },
    fullWidth: {
      control: "boolean",
      description:
        "幅(auto/100%)の指定に使用します。<br>※auto/100%以外の値を指定したい場合はstyle propsを使用してください。",
      table: {
        defaultValue: { summary: "l" },
      },
    },
    placeholder: {
      control: "text",
      description: "プレイスホルダーの表示に使用します。",
    },
    readonly: {
      control: "boolean",
      description: "読み取り専用状態を表します（UI 表示のみ制御します）。",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    rows: {
      control: "number",
      description: "textarea要素のrows属性を指定のために使用します。",
    },
    cols: {
      control: "number",
      description: "textarea要素 の cols属性を指定のために使用します。",
    },
    fixed: {
      control: "boolean",
      description: "textareaの可変許可の有無の指定のために使用します。",
    },
    error: {
      control: "boolean",
      description:
        "バリデーションエラーオブジェクト。エラースタイルの表示に使用されます。",
    },
    disabled: {
      control: "boolean",
      description:
        "フォーム要素を無効化します（register に渡されます）。<br>※Storybook 上のみの props です。",
      table: {
        category: "Storybook用",
      },
    },
    defaultValue: {
      control: "text",
      description:
        "初期値として input に表示する値を指定します。<br>※Storybook 上のみの props です。",
      table: {
        category: "Storybook用",
      },
    },
    validationMin: {
      control: "number",
      description:
        "バリデーションの動作確認用。createTextValidateのmin_lengthを指定するために使用します。<br>※Storybook 上のみの props です。",
      table: {
        category: "RHF用",
      },
    },
    validationMax: {
      control: "number",
      description:
        "バリデーションの動作確認用。createTextValidateのmax_lengthを指定するために使用します。<br>※Storybook 上のみの props です。",
      table: {
        category: "RHF用",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextAreaElementSample: Story = {
  args: {
    style: {},
    id: "editelement-id",
    defaultValue: "デフォルト値",
    validationMin: 1,
    validationMax: 10,
  },
  render: ({ ...args }) => {
    const elm_name = "text_area_elm";
    const schemas: ZodObject<{ [key: string]: ZodTypeAny }> = z.object({
      [elm_name]: createTextValidate({
        name: elm_name,
        min_length: args.validationMin || 0,
        max_length: args.validationMax || 0,
      }),
    });

    const {
      register,
      formState: { errors },
      trigger,
    } = useCustomForm(schemas, {
      defaultValues: { [elm_name]: args.defaultValue },
      mode: "onChange",
    });

    useEffect(() => {
      trigger(elm_name);
    }, [trigger]);

    return (
      <TextAreaElement
        {...args}
        register={register(elm_name, { disabled: args.disabled })}
        error={args.error || !!errors[elm_name]}
      />
    );
  },
};
