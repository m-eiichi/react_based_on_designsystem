import { type ReactElement } from "react";
import { FlexContainerProps, FlexContainerResponsiveProps } from "./types";
import Styles from "./flex_container.module.css";

import { generateClassNamesFromProps } from "@/utils/generateClassNamesFromProps.ts";

/**
 * `generateFlexContainerResponsiveClass` 関数
 *
 * @description
 * 指定されたフレックスコンテナのスタイルプロパティに基づいて、
 * 適切な CSS クラス名を動的に生成します。
 *
 * `wrap` プロパティを処理し、それ以外のフレックス関連のプロパティも適用可能です。
 * また、`prefix` を指定することで、タブレットや PC などのレスポンシブクラスを適用できます。
 *
 * @param {FlexContainerResponsiveProps} props - フレックスコンテナのスタイルプロパティ
 * @param {string} [prefix] - 任意のプレフィックス（例: "tb", "pc"）
 * @returns {string} 生成された CSS クラス名の文字列
 */

const generateFlexContainerResponsiveClass = (
  { wrap, ...rest }: FlexContainerResponsiveProps,
  prefix?: string,
): string => {
  const classes = [
    wrap && (prefix ? Styles[`${prefix}_${wrap}`] : Styles[`${wrap}`]),
    ...generateClassNamesFromProps(Styles, rest, prefix),
  ];
  return classes.filter(Boolean).join(" ");
};

/**
 * <FlexContainer/>コンポーネント
 *
 * @description フレックスコンポーネント
 * @param {FlexContainerProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const FlexContainer = ({
  //共通
  style,
  containerType,
  children,

  //基本
  direction = "row",
  wrap = "nowrap",
  alignContent = "stretch",
  justifyContent = "start",
  alignItems = "stretch",
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
  gap,

  //tbのスタイル用のプロパティ
  tbDirection,
  tbWrap,
  tbAlignContent,
  tbJustifyContent,
  tbAlignItems,
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
  tbGap,

  // pcのスタイル用のプロパティ
  pcDirection,
  pcWrap,
  pcAlignContent,
  pcJustifyContent,
  pcAlignItems,
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
  pcGap,
}: FlexContainerProps): ReactElement => {
  // クラス名結合
  const className = [
    Styles.flex,
    containerType === "inline-size"
      ? Styles.containerType_inline_size
      : containerType && Styles[`containerType_${containerType}`],

    generateFlexContainerResponsiveClass({
      direction,
      wrap,
      alignContent,
      justifyContent,
      alignItems,
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
      gap,
    }),

    generateFlexContainerResponsiveClass(
      {
        direction: tbDirection,
        wrap: tbWrap,
        alignContent: tbAlignContent,
        justifyContent: tbJustifyContent,
        alignItems: tbAlignItems,
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
        gap: tbGap,
      },
      "tb",
    ),
    generateFlexContainerResponsiveClass(
      {
        direction: pcDirection,
        wrap: pcWrap,
        alignContent: pcAlignContent,
        justifyContent: pcJustifyContent,
        alignItems: pcAlignItems,
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
        gap: pcGap,
      },
      "pc",
    ),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
