import { SpacingProps, PrefixedSpacingProps } from "@/types/size.ts";

/**
 * <Box/>プロパティ
 *
 * @property style - 直接styleを指定するプロパティ
 * @property as - 適用タグ名
 * @property width - 幅 string
 * @property height - 高さ string
 * @property border - ボーダーの有無
 * @property borderRadius - 角丸の指定
 * @property overTbBorderRadius - 576px以上時の角丸の指定
 * @property overPcBorderRadius - 993px以上時の角丸の指定
 * @property shadow - 影の有無
 * @property hoverShadow - マウスオーバー時の影の有無（変化の有無）
 * @property backgroundColor - 背景色
 * @property transition
 * @property onClick クリック時イベント
 * @property children - 子要素
 */

export type BoxProps = SpacingProps &
  PrefixedSpacingProps<"tb"> &
  PrefixedSpacingProps<"pc"> & {
    style?: React.CSSProperties;
    as?: "div" | "section" | "article";
    width?: "full" | "auto";
    height?: "full" | "auto";
    border?: boolean;
    borderRadius?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
    tbBorderRadius?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
    pcBorderRadius?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
    shadow?: boolean;
    hoverShadow?: boolean;
    backgroundColor?: "primary" | "secondary" | "tertiary";
    transition?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
  };
export type BoxResponsiveProps = SpacingProps & {
  borderRadius?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
};
