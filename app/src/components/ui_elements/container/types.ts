import {
  SpacingProps,
  PrefixedSpacingProps,
  BaseSizeProps,
} from "@/types/size.ts";

/**
 * <Container/>プロパティ
 *
 * @property style 直接styleを指定するプロパティ
 * @property as　適用タグ名
 *
 * BaseSizeProps<"maxWidth">
 * @property width　コンポーネントの幅または最大幅
 * @property children　子要素
 *
 * SpacingProp
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
 *
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
 * @property fixed　幅の固定の指定
 */

import React from "react";

export type ContainerProps = SpacingProps &
  PrefixedSpacingProps<"tb"> &
  PrefixedSpacingProps<"pc"> &
  BaseSizeProps<"width"> & {
    style?: React.CSSProperties;
    as?: "div" | "section" | "article";
    fixed?: boolean;
    children?: React.ReactNode;
  };
