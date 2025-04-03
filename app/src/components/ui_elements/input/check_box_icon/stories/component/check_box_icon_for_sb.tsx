import { useEffect, type ReactElement } from "react";

import { CheckBoxIcon } from "../..";
import { z } from "zod";
import { createAnyValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckBoxIconForSbProps } from "./types";

/**
 * CheckBoxIconForSbコンポーネント生成
 *
 * @param props : CheckBoxIconForSbProps
 * @returns StoryBook用のコンポーネント
 */

export const CheckBoxIconForSb = ({
  id = "",
  error,
  disabled,
  readonly,
  value,
}: CheckBoxIconForSbProps): ReactElement => {
  const elm_name = "checkbox_icon";

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
    <CheckBoxIcon
      id={id}
      register={register(elm_name, { disabled: disabled })}
      readonly={readonly}
      error={error}
      value={value}
    />
  );
};
