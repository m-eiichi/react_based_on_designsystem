import { useEffect, type ReactElement } from "react";
import { z, ZodObject, ZodTypeAny } from "zod";
import { createSelectValidate } from "@/utils/validation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "../..";
import { SelectForSbProps } from "./types";

/**
 * Editコンポーネント作成
 *
 * @param props : InputElementWrapperProps
 * @returns StoryBook用のラッパーコンポーネント
 */
export const SelectForSb = ({
  name,
  size,
  width,
  label,
  requirement,
  supportText,
  options,
  placeholder,
  creatable,
  disabled,
}: SelectForSbProps): ReactElement => {
  const elm_name = "select";
  const z_obj: ZodObject<{ [key: string]: ZodTypeAny }> = z.object({
    [elm_name]: createSelectValidate({}),
  });

  type Schema = z.infer<typeof z_obj>;

  const methods = useForm<Schema>({
    defaultValues: { elm_name: "" },
    resolver: zodResolver(z_obj),
    mode: "onBlur",
  });

  const {
    formState: { errors },
    trigger,
  } = methods;

  useEffect(() => {
    trigger(elm_name);
  });

  return (
    <FormProvider {...methods}>
      <Select
        name={name}
        label={label}
        requirement={requirement}
        supportText={supportText}
        placeholder={placeholder}
        size={size}
        width={width}
        options={options}
        disabled={disabled}
        creatable={creatable}
        errors={errors[elm_name]}
      />
    </FormProvider>
  );
};
