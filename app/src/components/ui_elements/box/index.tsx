// TODO onClicのバブリングの対応
import { type ReactElement } from "react";

import { BoxProps, BoxResponsiveProps } from "./types";
import Styles from "./box.module.css";

import { generateClassNamesFromProps } from "@/utils/generateClassNamesFromProps.ts";

/**
 * generateBoxResponsiveClass 関数
 *
 * @description
 * 指定されたボックスのスタイルプロパティから、対応する CSS クラス名を生成します。
 * プロパティのキーをスネークケースに変換し、CSS モジュールのクラス名として適用します。
 *
 * また、`prefix` を指定することで、異なるスクリーンサイズ（タブレット・PC）ごとの
 * レスポンシブクラスを動的に付与できます。
 *
 * @param {BoxResponsiveProps} props - ボックスのスタイルプロパティ
 * @param {string} [prefix] - 任意のプレフィックス（例: "tb", "pc"）
 * @returns {string} 生成された CSS クラス名の文字列
 */
const generateBoxResponsiveClass = (
  props: BoxResponsiveProps,
  prefix?: string,
): string => {
  const classes = [...generateClassNamesFromProps(Styles, props, prefix)];
  return classes.filter(Boolean).join(" ");
};

/**
 * <Box/>コンポーネント
 *
 * @description ボックスコンポーネント
 * @param {BoxProps} props types.ts参照
 * @returns {ReactElement} コンポーネント
 */

export const Box = ({
  style,
  as: As = "div",
  width,
  height,
  shadow = false,
  hoverShadow = false,
  backgroundColor = "primary",
  transition = true,
  border = false,
  children,
  borderRadius,
  tbBorderRadius,
  pcBorderRadius,
  onClick,
  m,
  mx,
  my,
  mt,
  mb,
  mr,
  ml,
  p,
  px,
  py,
  pt,
  pb,
  pr,
  pl,
  tbM,
  tbMx,
  tbMy,
  tbMt,
  tbMb,
  tbMr,
  tbMl,
  tbP,
  tbPx,
  tbPy,
  tbPt,
  tbPb,
  tbPr,
  tbPl,
  pcM,
  pcMx,
  pcMy,
  pcMt,
  pcMb,
  pcMr,
  pcMl,
  pcP,
  pcPx,
  pcPy,
  pcPt,
  pcPb,
  pcPr,
  pcPl,
}: BoxProps): ReactElement => {
  const className = [
    Styles.box,
    width === "auto" || !width
      ? Styles.width_auto
      : width === "full" && Styles.width_full,
    height === "auto" || !height
      ? Styles.height_auto
      : height === "full" && Styles.height_full,
    border && Styles.border,
    hoverShadow && Styles.hover_shadow,
    transition && Styles.transition,
    Styles[`bg_${backgroundColor}`],
    shadow && Styles.shadow,
    onClick && Styles.cursorPointer,

    // デフォルトのCSS
    generateBoxResponsiveClass({
      borderRadius,
      m,
      mx,
      my,
      mt,
      mb,
      mr,
      ml,
      p,
      px,
      py,
      pt,
      pb,
      pr,
      pl,
    }),
    // タブレット用のCSS
    generateBoxResponsiveClass(
      {
        borderRadius: tbBorderRadius,
        m: tbM,
        mx: tbMx,
        my: tbMy,
        mt: tbMt,
        mb: tbMb,
        mr: tbMr,
        ml: tbMl,
        p: tbP,
        px: tbPx,
        py: tbPy,
        pt: tbPt,
        pb: tbPb,
        pr: tbPr,
        pl: tbPl,
      },
      "tb",
    ),
    // PC用のCSS
    generateBoxResponsiveClass(
      {
        borderRadius: pcBorderRadius,
        m: pcM,
        mx: pcMx,
        my: pcMy,
        mt: pcMt,
        mb: pcMb,
        mr: pcMr,
        ml: pcMl,
        p: pcP,
        px: pcPx,
        py: pcPy,
        pt: pcPt,
        pb: pcPb,
        pr: pcPr,
        pl: pcPl,
      },
      "pc",
    ),
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <As className={className} style={style} onClick={onClick}>
      {children}
    </As>
  );
};
