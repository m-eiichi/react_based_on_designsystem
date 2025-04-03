import { type ReactElement } from "react";
import { SpacingProps } from "@/types/size.ts";
import { ContainerProps } from "./types.ts";
import Styles from "./container.module.css";
import { generateClassNamesFromProps } from "@/utils/generateClassNamesFromProps.ts";

/**
 * generateContainerResponsiveClass 関数
 *
 * @description
 * 指定されたコンテナのスタイルプロパティ（マージンやパディングなど）に基づいて、
 * 適切な CSS クラス名を動的に生成します。
 *
 * また、`prefix` を指定することで、タブレットや PC などのレスポンシブクラスを適用できます。
 *
 * @param {SpacingProps} props - コンテナのスタイルプロパティ（マージン・パディングなど）
 * @param {string} [prefix] - 任意のプレフィックス（例: "tb", "pc"）
 * @returns {string} 生成された CSS クラス名の文字列
 */

const generateContainerResponsiveClass = (
  props: SpacingProps,
  prefix?: string,
): string => {
  const classes = [...generateClassNamesFromProps(Styles, props, prefix)];
  return classes.filter(Boolean).join(" ");
};

/**
 * <Container/>コンポーネント
 *
 * @description　コンテナコンポーネント
 * @param {ContainerProps} types.ts参照
 * @returns {ReactElement | null} コンポーネント
 */
export const Container = ({
  style,
  as: As = "div",
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
  fixed = false,
  width,
  children,
}: ContainerProps): ReactElement => {
  const className = [
    Styles.container,
    width && fixed ? Styles[`width_${width}`] : Styles[`maxWidth_${width}`],
    // デフォルトのCSS
    generateContainerResponsiveClass({
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
    generateContainerResponsiveClass(
      {
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
    generateContainerResponsiveClass(
      {
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
    <As className={className} style={style}>
      {children}
    </As>
  );
};
