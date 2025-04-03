import { useEffect, type ReactElement } from "react";

import { EditElement } from "../..";
import { z } from "zod";
import { createAnyValidate } from "@/utils/validation";

import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditElementForSbProps } from "./types";

/**
 * EditElementForSbコンポーネント生成
 *
 * @param props : EditElementForSbForSbProps
 * @returns StoryBook用のコンポーネント
 */

export const EditElementForSb = <T extends FieldValues>({
  id = "",
  size,
  width,
  widthFixed,
  errors,
  disabled,
  readonly,
}: EditElementForSbProps<T>): ReactElement => {
  const elm_name = "edit_elm";
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
    <EditElement
      id={id}
      size={size}
      width={width}
      widthFixed={widthFixed}
      register={register(elm_name, { disabled: disabled })}
      errors={errors ? errors : undefined}
      readonly={readonly}
    />
  );
};
