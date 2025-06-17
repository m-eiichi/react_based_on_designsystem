/**
 * 選択肢（<option/>）のプロパティ
 *
 * @property label - 表示される文字列
 * @property value - 対応する値（フォーム送信や選択状態に使用）
 */
export type OptionProps = {
  label: string;
  value: string | number;
};

/**
 * <SelectElement/>プロパティ
 *
 * @property name - フォームフィールド名。React Hook Form と連携するために使用。
 *                  この name をキーとしてフォームの値やバリデーションが管理されます
 * @property id - id 属性（label と紐づける際などに使用）
 * @property size - コンポーネントのサイズ（"s"｜"m"｜"l"）
 * @property options - 選択肢の配列。各 option の表示名・値を定義（label/value）
 * @property width - widthまたはmax-width の指定（例："300px" など）
 * @property fullWidth -  true の場合、横幅いっぱいに広がります。false の場合は内容に応じて自動調整されます。
 * @property placeholder - プレースホルダに表示する文字列（未選択状態の表示に利用）
 * @property disabled - true の場合は選択不可
 * @property readonly - true の場合は読み取り専用（選択肢変更不可）
 * @property error - true の場合はエラー表示（バリデーションエラーなど）
 * @property onChange - 値変更時のイベントハンドラ（選択値を引数に受け取る）
 * @property onBlur - フォーカスが外れた際のイベントハンドラ（選択値を引数に受け取る）
 * @property creatable - true の場合は自由入力を許可（未定義の値も入力可能に）
 */
export type SelectElementProps = {
  name: string;
  id?: string;
  size?: "s" | "m" | "l";
  options?: OptionProps[];
  width?: string;
  fullWidth?: boolean;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  onChange?: (value: string | number | (string | number)[] | null) => void;
  onBlur?: (value: string | number | (string | number)[] | null) => void;
  creatable?: boolean;
};
