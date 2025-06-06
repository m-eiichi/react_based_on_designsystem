import { useEffect, type ReactElement } from "react";

import { SelectElement } from "../..";
import { z, ZodObject, ZodTypeAny } from "zod";
import { createSelectValidate } from "@/utils/validation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectElementForSbProps } from "./types";

/**
 * SelectElementForSbコンポーネント生成
 *
 * @param props : SelectElementForSbProps
 * @returns StoryBook用のコンポーネント
 */

export const SelectElementForSb = ({
  size,
  width,
  widthFixed,
  error,
  options,
  name,
  placeholder,
  creatable,
  disabled,
  readonly,
}: SelectElementForSbProps): ReactElement => {
  const elm_name = "select_element";
  const z_obj: ZodObject<{ [key: string]: ZodTypeAny }> = z.object({
    [elm_name]: createSelectValidate({}),
  });

  type Schema = z.infer<typeof z_obj>;

  const methods = useForm<Schema>({
    defaultValues: { [elm_name]: "" },
    resolver: zodResolver(z_obj),
    mode: "onBlur",
  });

  const { trigger } = methods;

  useEffect(() => {
    trigger(elm_name);
  });

  return (
    <FormProvider {...methods}>
      <SelectElement
        name={name}
        size={size}
        width={width}
        widthFixed={widthFixed}
        error={error}
        options={options}
        creatable={creatable}
        placeholder={placeholder}
        disabled={disabled || readonly}
      />
    </FormProvider>
  );
};
