import { useEffect, type ReactElement } from "react";

import { TextAreaElement } from "../..";
import { z } from "zod";
import { createTextValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextAreaElementForSbProps } from "./types";

/**
 * TextAreaElementForSbコンポーネント生成
 *
 * @param props : TextAreaElementForSbProps
 * @returns StoryBook用のコンポーネント
 */

export const TextAreaElementForSb = ({
  id,
  size,
  width,
  readonly,
  rows,
  cols,
  fixed,
  min_length, //sbのzod用
  max_length, //sbのzod用
}: TextAreaElementForSbProps): ReactElement => {
  const elm_name = "textarea";
  const z_obj: any = z.object({
    [elm_name]: createTextValidate({ name: "", min_length, max_length }),
  });

  type Schema = z.infer<typeof z_obj>;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<Schema>({
    defaultValues: { [elm_name]: "" },
    resolver: zodResolver(z_obj),
    mode: "onBlur",
  });

  useEffect(() => {
    trigger(elm_name);
  });

  return (
    <TextAreaElement
      id={id}
      size={size}
      width={width}
      register={register(elm_name)}
      readonly={readonly}
      errors={errors[elm_name]}
      rows={rows}
      cols={cols}
      fixed={fixed}
    />
  );
};
