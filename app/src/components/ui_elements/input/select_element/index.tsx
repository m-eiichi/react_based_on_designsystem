import { type ReactElement } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";
import { InputContainerForSizeS } from "@/components/ui_elements/input/input_container_for_size_s";
import { SelectElementProps, OptionProps } from "./types";

/**
 * <SelectElement/>コンポーネント
 *
 * @description <select/>要素の最小コンポーネント
 * @param {SelectElementProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 *
 * select コンポーネントは基本的にwidthとwidthFixedで調整してください。
 */
export const SelectElement = ({
  name,
  options,
  id,
  size = "l",
  width,
  widthFixed = true,
  placeholder,
  defaultValue,
  disabled,
  error,
  handleChange,
  creatable,
}: SelectElementProps): ReactElement => {
  const { control } = useFormContext();

  // react-selectのスタイル上書き

  // 最大幅の上書き
  const selectMaxWidth = () => {
    if (width && !widthFixed) {
      return width;
    } else {
      return "none";
    }
  };
  // 幅の上書き
  const selectWidth = () => {
    if (widthFixed) {
      if (width) {
        return width;
      }
    } else {
      return "100%";
    }
  };

  // 高さの上書き
  const selectHeight = () => {
    switch (size) {
      case "s":
        return "36px";
      case "m":
        return "48px";
      default:
        return "56px";
    }
  };

  // エラー時borderの上書き
  const errorStyle = () => {
    if (error) {
      return "2px solid #ec0000";
    }
  };

  // border-radiusの上書き
  const selectBorderRadius = () => {
    if (size === "s") {
      return "4px";
    } else {
      return "8px";
    }
  };

  // select内のpaddingの上書き
  const valueContainerPadding = () => {
    switch (size) {
      case "s":
        return "6px 8px";
      case "m":
        return "12px 16px";
      default:
        return "16px";
    }
  };

  // 右のアイコンの幅の上書き
  const IndicatorsContainerWidth = () => {
    if (size === "s") {
      return "32px";
    } else {
      return "40px";
    }
  };

  const selectStyles: StylesConfig<OptionProps, false> = {
    control: (baseStyles, state) => ({
      ...baseStyles,

      height: selectHeight(),
      lineHeight: 1,
      boxShadow: "none",
      outline: state.isFocused ? "2px solid #b78f00" : errorStyle(),
      outlineOffset: "-1px",
      borderRadius: selectBorderRadius(),
      borderColor: "#1a1a1a",
      "&:hover": {
        borderColor: "#1a1a1a",
      },
    }),
    container: (baseStyles) => ({
      ...baseStyles,
      display: "inline-block",
      maxWidth: selectMaxWidth(),
      width: selectWidth(),
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      padding: valueContainerPadding(),
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      padding: 0,
      margin: 0,
    }),
    indicatorsContainer: (baseStyles) => ({
      ...baseStyles,
      width: IndicatorsContainerWidth(),
    }),
  };

  // CreatableSelect と Select　の切り分け処理
  const renderSelect = (field: any) => {
    const Component = creatable ? CreatableSelect : Select;
    return (
      <Component
        {...field}
        inputId={id ? id : name}
        styles={selectStyles}
        options={options}
        isDisabled={disabled}
        value={
          field.value !== ""
            ? options?.find((option) => option.value === field.value) ?? {
                label: field.value,
                value: field.value,
              }
            : null
        } // 選択された値を表示
        onChange={(selected?: OptionProps) => {
          field.onChange(selected ? selected.value : null); // nullチェックを追加

          // カスタムのハンドラーを実行
          if (handleChange) {
            if (typeof handleChange === "function") {
              handleChange();
            } else {
              handleChange.forEach((change_event) => change_event());
            }
          }
        }}
        placeholder={placeholder}
      />
    );
  };

  return (
    <>
      {size === "s" ? (
        <InputContainerForSizeS display={!widthFixed ? "block" : "inlineBlock"}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue ? defaultValue : ""}
            render={({ field }) => renderSelect(field)}
          />
        </InputContainerForSizeS>
      ) : (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue ? defaultValue : ""}
          render={({ field }) => renderSelect(field)}
        />
      )}
    </>
  );
};
