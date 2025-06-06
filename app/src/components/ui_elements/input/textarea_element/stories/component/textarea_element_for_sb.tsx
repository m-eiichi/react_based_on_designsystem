import { useEffect, type ReactElement } from "react";

import { TextAreaElement } from "../..";
import { z, ZodObject, ZodTypeAny } from "zod";
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
  style,
  id,
  size,
  readonly,
  rows,
  cols,
  fixed,
  min_length, //sbのzod用
  max_length, //sbのzod用
}: TextAreaElementForSbProps): ReactElement => {
  const elm_name = "textarea";
  const z_obj: ZodObject<{ [key: string]: ZodTypeAny }> = z.object({
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
      style={style}
      id={id}
      size={size}
      register={register(elm_name)}
      readonly={readonly}
      errors={errors[elm_name]}
      rows={rows}
      cols={cols}
      fixed={fixed}
    />
  );
};
