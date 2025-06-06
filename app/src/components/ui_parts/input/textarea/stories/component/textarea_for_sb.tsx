import { useEffect, type ReactElement } from "react";

import { TextArea } from "../..";
import { z, ZodObject, ZodTypeAny } from "zod";
import { createTextValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextAreaForSbProps } from "./types";

/**
 * TextareaForSbコンポーネント生成
 *
 * @param props : TextAreaForSbProps
 * @returns StoryBook用のコンポーネント
 */

export const TextareaForSb = ({
  min_length,
  max_length,
  id,
  size,
  width,
  label,
  requirement,
  supportText,
  rows,
  cols,
  disabled,
  readonly,
  fixed,
  errorAreaFixed,
}: TextAreaForSbProps): ReactElement => {
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
    <>
      <TextArea
        size={size}
        width={width}
        id={id}
        label={label}
        requirement={requirement}
        supportText={supportText}
        register={register(elm_name, { disabled: disabled })}
        readonly={readonly}
        errors={errors[elm_name]}
        rows={rows}
        cols={cols}
        fixed={fixed}
        errorAreaFixed={errorAreaFixed}
      />
    </>
  );
};
