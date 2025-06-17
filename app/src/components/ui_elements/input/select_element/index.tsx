import { useEffect, type ReactElement } from "react";
import {
  Controller,
  useFormContext,
  type ControllerRenderProps,
  type FieldValues,
} from "react-hook-form";
import Select, { type StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";
import { InputContainerForSizeS } from "@/components/ui_elements/input/input_container_for_size_s";
import { SelectElementProps, OptionProps } from "./types";

/**
 * <SelectElement/>コンポーネント
 *
 * @description <select/>要素の最小コンポーネント
 *
 * @param {SelectElementProps} props types.ts参照
 *
 * @returns {ReactElement} コンポーネント
 *
 */
export const SelectElement = ({
  name,
  id,
  options,
  size = "l",
  fullWidth = false,
  width,
  placeholder,
  disabled = false,
  readonly = false,
  error,
  onChange,
  onBlur,
  creatable = false,
}: SelectElementProps): ReactElement => {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    if (disabled) {
      setValue(name, "");
    }
  }, [disabled, setValue, name]);
  // react-selectのスタイル上書き

  // 最大幅の上書き
  const selectMaxWidth = () => {
    if (width && fullWidth) {
      return width;
    } else {
      return "none";
    }
  };
  // 幅の上書き
  const selectWidth = () => {
    if (!fullWidth) {
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

  const selectStyles: StylesConfig<OptionProps | undefined | false> = {
    // 選択ボックスの外枠のスタイル
    control: (baseStyles, state) => ({
      ...baseStyles,
      height: selectHeight(),
      lineHeight: 1,
      boxShadow: "none",
      outline: state.isFocused ? "2px solid #b78f00" : errorStyle(),
      outlineOffset: "-1px",
      border: error ? "none" : baseStyles.border,
      borderRadius: selectBorderRadius(),
      borderColor: state.isDisabled ? "#7f7f7f" : "#1a1a1a",
      backgroundColor: state.isDisabled ? "#f2f2f2" : "#ffffff",
      color: state.isDisabled ? "#000000" : "#A1A1A1",
      cursor: state.isDisabled ? "not-allowed" : "pointer",
    }),
    // コンテナ全体のスタイル
    container: (baseStyles) => ({
      ...baseStyles,
      display: "inline-block",
      maxWidth: selectMaxWidth(),
      width: selectWidth(),
    }),

    // 選択された値の表示エリアのスタイル
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      padding: valueContainerPadding(),
    }),

    // 入力フィールドのスタイル
    input: (baseStyles) => ({
      ...baseStyles,
      padding: 0,
      margin: 0,
    }),

    // ▼ボタンやクリアボタンのコンテナ
    indicatorsContainer: (baseStyles) => ({
      ...baseStyles,
      width: IndicatorsContainerWidth(),
    }),

    //placeholderのスタイル
    placeholder: (baseStyles) => ({
      ...baseStyles,
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: "#666666",
    }),
  };

  // CreatableSelect と Select の切り分け処理
  const renderSelect = (field: ControllerRenderProps<FieldValues, string>) => {
    const Component = creatable ? CreatableSelect : Select;
    return (
      <Component
        {...field}
        id={id}
        inputId={name}
        styles={selectStyles}
        options={options}
        isDisabled={disabled || readonly}
        value={
          field.value !== "" && !disabled
            ? options?.find((option) => option.value === field.value) ?? {
                label: field.value,
                value: field.value,
              }
            : null
        } // 選択された値を表示
        onChange={(selectedOptions, _actionMeta) => {
          let value: string | number | (string | number)[] | null = null;

          if (Array.isArray(selectedOptions)) {
            // MultiValue（複数選択）の場合 → valueの配列を渡す
            value = selectedOptions.map((option) => option.value);
          } else if (
            selectedOptions &&
            typeof selectedOptions === "object" &&
            "value" in selectedOptions
          ) {
            // SingleValue（単一選択）の場合 → valueを直接渡す
            value = selectedOptions.value;
          }

          field.onChange(value);
          onChange?.(value);
        }}
        onBlur={() => {
          field.onBlur(); // フォーカスが外れたことをフォームに通知
          onBlur?.(field.value); // 現在のvalueを外部に通知
        }}
        placeholder={placeholder}
      />
    );
  };

  return (
    <>
      {size === "s" ? (
        <InputContainerForSizeS display={fullWidth ? "block" : "inlineBlock"}>
          <Controller
            name={name}
            control={control}
            render={({ field }) => renderSelect(field)}
          />
        </InputContainerForSizeS>
      ) : (
        <Controller
          name={name}
          control={control}
          render={({ field }) => renderSelect(field)}
        />
      )}
    </>
  );
};
