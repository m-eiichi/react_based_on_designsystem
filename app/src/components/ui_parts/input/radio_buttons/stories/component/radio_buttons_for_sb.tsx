import { useEffect, type ReactElement } from "react";

import { z, ZodObject, ZodTypeAny } from "zod";
import { createRadioValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioButtons } from "../..";

import { RadioButtonsRhfForSbProps } from "./types";

/**
 * RadioButtonsコンポーネント作成
 *
 * @param props : RadioButtonsRhfForSbProps
 * @returns StoryBook用のコンポーネント
 */
export const RadioButtonsForSb = ({
  label,
  requirement,
  supportText,
  name,
  size,
  width,
  minWidth,
  items,
  vertical,
  pcVertical,
  tile,
  disabled,
  readonly,
}: RadioButtonsRhfForSbProps): ReactElement => {
  const zod_rule = "test";
  const z_obj: ZodObject<{ [key: string]: ZodTypeAny }> = z.object({
    [zod_rule]: createRadioValidate({ name }),
  });

  type Schema = z.infer<typeof z_obj>;

  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<Schema>({
    defaultValues: { zod_rule: "" },
    resolver: zodResolver(z_obj),
    mode: "onTouched",
  });

  useEffect(() => {
    trigger(zod_rule);
  });

  return (
    <RadioButtons
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
    />
  );
};
