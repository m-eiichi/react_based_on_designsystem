import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

// ダイアログの状態を管理するAtoms
export const dialogAtom = atom<string>("");

// 共通アラート用Atoms
export const alertAtom = atomWithReset<{
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
}>({ title: "", children: "", onClick: undefined });
