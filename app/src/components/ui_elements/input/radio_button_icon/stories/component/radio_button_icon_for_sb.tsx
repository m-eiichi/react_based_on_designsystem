import { useEffect, type ReactElement } from "react";

import { RadioButtonIcon } from "../..";
import { z } from "zod";
import { createAnyValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioButtonIconForSbProps } from "./types";

/**
 * RadioButtonForSbコンポーネント生成
 *
 * @param props : RadioButtonForSbProps
 * @returns StoryBook用のコンポーネント
 */

export const RadioButtonIconForSb = ({
  id = "",
  error,
  disabled,
  readonly,
  value,
}: RadioButtonIconForSbProps): ReactElement => {
  const elm_name = "radiobutton_icon";
  const z_obj: any = z.object({
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
    <RadioButtonIcon
      id={id}
      register={register(elm_name, { disabled: disabled })}
      error={error}
      value={value}
      readonly={readonly}
    />
  );
};
