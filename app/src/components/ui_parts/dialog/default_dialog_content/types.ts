/**
 * <DefaultDialogContent/>プロパティ
 * @property size dialogのサイズ。  
 *  - `"s"`: 小さいサイズ  
 *  - `"m"`: 中くらいのサイズ  
 *  - `"l"`: 大きいサイズ  
 * @property title dialogのタイトルを指定します。
 * @property children dialogのコンテンツ部分

 */
export type DefaultDialogContentProps = {
  size?: "s" | "m" | "l";
  title: string;
  children: React.ReactNode;
};
