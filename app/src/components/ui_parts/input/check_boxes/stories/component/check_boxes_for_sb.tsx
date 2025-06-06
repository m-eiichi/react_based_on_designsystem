import { useEffect, type ReactElement } from "react";

import { z, ZodObject, ZodTypeAny } from "zod";
import { createCheckBoxValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckBoxes } from "../..";

import { CheckBoxesForSbProps } from "./types";

/**
 * CheckBoxesForSbコンポーネント作成
 *
 * @param props : CheckBoxesForSbProps
 * @returns StoryBook用のコンポーネント
 */
export const CheckBoxesForSb = ({
  items,
  name,
  label,
  requirement,
  supportText,
  size,
  width,
  minWidth,
  vertical,
  pcVertical,
  tile,
  disabled,
  readonly,
  min,
  max,
  errorAreaFixed,
}: CheckBoxesForSbProps): ReactElement => {
  const zod_rule = "test";
  const z_obj: ZodObject<{ [key: string]: ZodTypeAny }> = z.object({
    [zod_rule]: createCheckBoxValidate({ name, min, max }),
  });

  type Schema = z.infer<typeof z_obj>;

  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<Schema>({
    defaultValues: { [zod_rule]: "" },
    resolver: zodResolver(z_obj),
    mode: "onTouched",
  });

  useEffect(() => {
    trigger(zod_rule);
  });

  return (
    <>
      <CheckBoxes
        label={label}
        requirement={requirement}
        supportText={supportText}
        size={size}
        width={width}
        minWidth={minWidth}
        items={items}
        register={register(zod_rule, { disabled: disabled })}
        readonly={readonly}
        errors={errors[zod_rule]}
        vertical={vertical}
        pcVertical={pcVertical}
        tile={tile}
        errorAreaFixed={errorAreaFixed}
      />
    </>
  );
};
