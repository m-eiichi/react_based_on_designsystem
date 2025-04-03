// BaseSizeは、サイズを表す文字列のリテラル型を定義
type BaseSize = "xs" | "s" | "m" | "l" | "xl";

// BaseSpacingKeysは、間隔のプロパティ名をリテラル型で定義
type BaseSpacingKeys =
  | "m" // マージン
  | "mx" // 水平方向のマージン
  | "my" // 垂直方向のマージン
  | "mt" // 上部マージン
  | "mb" // 下部マージン
  | "mr" // 右側マージン
  | "ml" // 左側マージン
  | "p" // パディング
  | "px" // 水平方向のパディング
  | "py" // 垂直方向のパディング
  | "pt" // 上部パディング
  | "pb" // 下部パディング
  | "pr" // 右側パディング
  | "pl"; // 左側パディング

// SpacingPropsは、基本的な間隔指定用の型
// 例えば、{ m: "xs", p: "l" } のように、各間隔プロパティに対してBaseSize（"xs", "s", "m", "l", "xl"）を設定可能
export type SpacingProps = {
  [K in BaseSpacingKeys]?: BaseSize; // BaseSpacingKeysに対応する各プロパティがBaseSize型で指定される
};

// PrefixedSpacingPropsは、"tb"や"pc"などのプレフィックスを付けた間隔指定用の型
// 例えば、{ tbM: "s", pcPx: "m" } のように、"tb"や"pc"といったプレフィックスを持つプロパティを許容
export type PrefixedSpacingProps<T extends string> = {
  [K in BaseSpacingKeys as `${T}${Capitalize<K>}`]?: BaseSize; // プレフィックスをつけたプロパティ名に対してBaseSize型を指定
};

// BaseSizePropsは、任意の文字列Tに基づいたキーを持つ型
// 例えば、Tが"container"の場合、{ container: "m" } というプロパティ名が使用され、値はBaseSize型
export type BaseSizeProps<T extends string> = {
  [key in T]?: BaseSize; // Tに基づくプロパティ名に対してBaseSize型の値を設定
};
