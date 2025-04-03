import {
  SpacingProps,
  PrefixedSpacingProps,
  BaseSizeProps,
} from "@/types/size.ts";

/**
 * <FlexContainer/>プロパティ
 *
 * @property style 直接styleを指定するプロパティ
 * @property containerType container-typeプロパティ
 * @property children 子要素
 * @property direction flex-directionプロパティ
 * @property wrap flex-wrapプロパティ
 * @property alignContent align-contentプロパティ
 * @property justifyContent justify-contentプロパティ
 * @property alignItems align-itemsプロパティ
 * BaseSizeProps<"gap">
 * @property gap gapプロパティ
 *
 * @property tbDirection (タブレット版)direction
 * @property tbWrap (タブレット版)wrap
 * @property tbAlignContent (タブレット版)alignContent
 * @property tbJustifyContent (タブレット版)justifyContent
 * @property tbAlignItems (タブレット版)alignItems
 * BaseSizeProps<"tbGap">
 * @property tbGap (タブレット版)gap
 *
 * @property pcDirection (PCサイズ版)direction
 * @property pcWrap (PCサイズ版)wrap
 * @property pcAlignContent (PCサイズ版)alignContent
 * @property pcJustifyContent (PCサイズ版)justifyContent
 * @property pcAlignItems (PCサイズ版)alignItems
 *  BaseSizeProps<"gap">
 * @property pcGap (PCサイズ版)gap
 * 
 * SpacingProps
 * @property m "xs" | "s" | "m" | "l" | "xl" などのサイズ指定
 * @property mx 横方向のマージン
 * @property my 縦方向のマージン
 * @property mt 上方向のマージン
 * @property mb 下方向のマージン
 * @property mr 右方向のマージン
 * @property ml 左方向のマージン
 * @property p "xs" | "s" | "m" | "l" | "xl" などのサイズ指定
 * @property px 横方向のパディング
 * @property py 縦方向のパディング
 * @property pt 上方向のパディング
 * @property pb 下方向のパディング
 * @property pr 右方向のパディング
 * @property pl 左方向のパディング
 *
 * PrefixedSpacingProps<"tb">
 * @property tbM タブレット版のマージンサイズ指定
 * @property tbMx 横方向のタブレット版マージン
 * @property tbMy 縦方向のタブレット版マージン
 * @property tbMt 上方向のタブレット版マージン
 * @property tbMb 下方向のタブレット版マージン
 * @property tbMr 右方向のタブレット版マージン
 * @property tbMl 左方向のタブレット版マージン
 * @property tbP タブレット版のパディングサイズ指定
 * @property tbPx 横方向のタブレット版パディング
 * @property tbPy 縦方向のタブレット版パディング
 * @property tbPt 上方向のタブレット版パディング
 * @property tbPb 下方向のタブレット版パディング
 * @property tbPr 右方向のタブレット版パディング
 * @property tbPl 左方向のタブレット版パディング
 
* PrefixedSpacingProps<"pc">
 * @property pcM PC版のマージンサイズ指定
 * @property pcMx 横方向のPC版マージン
 * @property pcMy 縦方向のPC版マージン
 * @property pcMt 上方向のPC版マージン
 * @property pcMb 下方向のPC版マージン
 * @property pcMr 右方向のPC版マージン
 * @property pcMl 左方向のPC版マージン
 * @property pcP PC版のパディングサイズ指定
 * @property pcPx 横方向のPC版パディング
 * @property pcPy 縦方向のPC版パディング
 * @property pcPt 上方向のPC版パディング
 * @property pcPb 下方向のPC版パディング
 * @property pcPr 右方向のPC版パディング
 * @property pcPl 左方向のPC版パディング
 */

export type FlexContainerProps = SpacingProps &
  PrefixedSpacingProps<"tb"> &
  PrefixedSpacingProps<"pc"> &
  BaseSizeProps<"gap"> &
  BaseSizeProps<"tbGap"> &
  BaseSizeProps<"pcGap"> & {
    style?: React.CSSProperties;
    containerType?: "normal" | "inline-size";
    children?: React.ReactNode;
    direction?: "row" | "column" | "rReverse" | "cReverse";
    wrap?: "nowrap" | "wrap";
    alignContent?:
      | "center"
      | "start"
      | "end"
      | "around"
      | "between"
      | "stretch"
      | "normal";
    justifyContent?:
      | "center"
      | "start"
      | "end"
      | "between"
      | "around"
      | "evenly"
      | "normal";
    alignItems?: "center" | "start" | "end" | "stretch" | "baseline" | "normal";
    tbDirection?: "row" | "column" | "rReverse" | "cReverse";
    tbWrap?: "nowrap" | "wrap";
    tbAlignContent?:
      | "center"
      | "start"
      | "end"
      | "around"
      | "between"
      | "stretch"
      | "normal";
    tbJustifyContent?:
      | "center"
      | "start"
      | "end"
      | "between"
      | "around"
      | "evenly"
      | "normal";
    tbAlignItems?:
      | "center"
      | "start"
      | "end"
      | "stretch"
      | "baseline"
      | "normal";
    pcDirection?: "row" | "column" | "rReverse" | "cReverse";
    pcWrap?: "nowrap" | "wrap";
    pcAlignContent?:
      | "center"
      | "start"
      | "end"
      | "around"
      | "between"
      | "stretch"
      | "normal";
    pcJustifyContent?:
      | "center"
      | "start"
      | "end"
      | "between"
      | "around"
      | "evenly"
      | "normal";
    pcAlignItems?:
      | "center"
      | "start"
      | "end"
      | "stretch"
      | "baseline"
      | "normal";
  };

export type FlexContainerResponsiveProps = SpacingProps &
  BaseSizeProps<"gap"> & {
    direction?: "row" | "column" | "rReverse" | "cReverse";
    wrap?: "nowrap" | "wrap";
    alignContent?:
      | "center"
      | "start"
      | "end"
      | "around"
      | "between"
      | "stretch"
      | "normal";
    justifyContent?:
      | "center"
      | "start"
      | "end"
      | "between"
      | "around"
      | "evenly"
      | "normal";
    alignItems?: "center" | "start" | "end" | "stretch" | "baseline" | "normal";
  };
