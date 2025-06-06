import { useEffect, type ReactElement } from "react";

import { z } from "zod";
import {
  createAnyValidate,
  createDateTimeValidate,
  createEmailValidate,
  createNumberValidate,
  createPasswordValidate,
  createTextValidate,
  createUrlValidate,
} from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "../..";

import { EditForSbProps, EditForSbZodProps } from "./types";

/**
 * バリデーション生成
 *
 * @param name
 * @param type
 * @returns validation
 */
function createZodObj(
  zod_rule: string,
  { type, name, min, max, req_char, req_number, req_symbol }: EditForSbZodProps,
) {
  switch (type) {
    case "text":
    case "tel":
      return z.object({
        [zod_rule]: createTextValidate({
          input_type: type === "tel" ? "tel" : "text",
          name,
          min_length: min,
          max_length: max,
        }),
      });
    case "number":
      return z.object({ [zod_rule]: createNumberValidate({ name, min, max }) });
    case "email":
      return z.object({
        [zod_rule]: createEmailValidate({
          name,
          min_length: min,
          max_length: max,
        }),
      });
    case "password":
      return z.object({
        [zod_rule]: createPasswordValidate({
          name,
          min_length: min,
          max_length: max,
          req_char,
          req_number,
          req_symbol,
        }),
      });
    case "url":
      return z.object({
        [zod_rule]: createUrlValidate({ name, max_length: max }),
      });
    case "date":
    case "datetime-local":
      return z.object({ [zod_rule]: createDateTimeValidate({ name }) });
    default:
      return z.object({ [zod_rule]: createAnyValidate() });
  }
}

/**
 * EditForSbコンポーネント作成
 *
 * @param props : EditForSbProps
 * @returns StoryBook用のラッパーコンポーネント
 */

export const EditForSb = ({
  label,
  requirement,
  supportText,
  size,
  width,
  disabled,
  readonly,
  errorAreaFixed,
  ...rest
}: EditForSbProps): ReactElement => {
  const zod_rule = "test";
  const z_obj = createZodObj(zod_rule, rest);

  type Schema = z.infer<typeof z_obj>;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<Schema>({
    defaultValues: { [zod_rule]: "" },
    resolver: zodResolver(z_obj),
    mode: "onBlur",
  });

  useEffect(() => {
    trigger(zod_rule);
  });

  return (
    <>
      <Edit
        label={label}
        requirement={requirement}
        supportText={supportText}
        size={size}
        width={width}
        type={rest.type}
        register={register(zod_rule, { disabled: disabled })}
        readonly={readonly}
        errors={errors[zod_rule]}
        errorAreaFixed={errorAreaFixed}
      />
    </>
  );
};
