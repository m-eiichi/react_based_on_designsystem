/**
 * <CardHeader/>プロパティ
 *
 * @property icon アイコンのURL
 * @property title タイトル
 * @property subTitle サブタイトル
 * @property optionButton オプションボタンのクリックアクション
 */

export type CardHeaderProps = {
  iconSrc?: string;
  title: string;
  subTitle?: string;
  optionButton?: () => void;
};
