import { useEffect, type ReactElement } from "react";

import { CheckBox } from "../..";
import { z } from "zod";
import { createAnyValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckBoxForSbProps } from "./types";

/**
 * CheckBoxForSbコンポーネント生成
 *
 * @param props : CheckBoxForSbProps
 * @returns StoryBook用のコンポーネント
 */

export const CheckBoxForSb = ({
  size,
  width,
  minWidth,
  text,
  subText,
  tile,
  id = "",
  error,
  disabled,
  readonly,
  value,
}: CheckBoxForSbProps): ReactElement => {
  const elm_name = "checkbox";
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
    <CheckBox
      size={size}
      width={width}
      minWidth={minWidth}
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
