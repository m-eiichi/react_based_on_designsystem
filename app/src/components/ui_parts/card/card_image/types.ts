/**
 * <CardImage/>プロパティ
 *
 * @property src 画像のsrc
 * @property trim 画像のサイズ
 */

export type CardImageProps = {
  src: string;
  trim?: "rectangle" | "square" | "none";
};
