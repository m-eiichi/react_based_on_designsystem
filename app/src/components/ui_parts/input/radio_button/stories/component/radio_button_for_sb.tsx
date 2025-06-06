import { useEffect, type ReactElement } from "react";

import { RadioButton } from "../..";
import { z, ZodObject, ZodTypeAny } from "zod";
import { createAnyValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioButtonForSbProps } from "./types";

/**
 * RadioButtonForSbコンポーネント生成
 *
 * @param props : RadioButtonForSbProps
 * @returns StoryBook用のコンポーネント
 */

export const RadioButtonIconForSb = ({
  size,
  width,
  text,
  subText,
  tile,
  id = "",
  error,
  disabled,
  readonly,
  value,
}: RadioButtonForSbProps): ReactElement => {
  const elm_name = "radiobutton";
  const z_obj: ZodObject<{ [key: string]: ZodTypeAny }> = z.object({
    [elm_name]: createAnyValidate(),
  });

  type Schema = z.infer<typeof z_obj>;

  const { register, trigger } = useForm<Schema>({
    defaultValues: { [elm_name]: "" },
    resolver: zodResolver(z_obj),
    mode: "onBlur",
  });

  useEffect(() => {
    trigger(elm_name);
  });

  return (
    <RadioButton
      size={size}
      width={width}
      text={text}
      subText={subText}
      tile={tile}
      id={id}
      register={register(elm_name, { disabled: disabled })}
      readonly={readonly}
      error={error}
      value={value}
    />
  );
};
