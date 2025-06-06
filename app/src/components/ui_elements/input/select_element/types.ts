/**
 * <option/>プロパティ
 *
 * @param label 表示名
 * @param value value属性
 */
export type OptionProps = {
  label: string;
  value: string | number;
};

/**
 * <SelectElement/>プロパティ
 *
 * @property name name属性
 * @property id id属性
 * @property options OptionProps配列
 * @property size コンポーネントサイズ
 * @property width max-widthプロパティ
 * @property widthFixed の固定の有無
 * @property placeholder placeholder属性
 * @property disabled True=disabled
 * @property error True=エラーあり
 * @property handleChange change時イベント
 * @property creatable True=手入力可
 */
export type SelectElementProps = {
  name: string;
  options?: OptionProps[];
  size?: "s" | "m" | "l";
  width?: string;
  widthFixed?: boolean;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  externalOnChange?: (
    value: string | number | (string | number)[] | null,
  ) => void;
  externalOnBlur?: (
    value: string | number | (string | number)[] | null,
  ) => void;
  creatable?: boolean;
};
