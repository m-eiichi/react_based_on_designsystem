import { type ReactElement } from "react";
import { CardImageProps } from "./types.ts";
import Styles from "./card_image.module.css";

export const CardImage = ({ src, trim }: CardImageProps): ReactElement => {
  const img = [Styles.img, trim && trim !== "none" && Styles[`${trim}`]]
    .filter(Boolean)
    .join(" ");
  return <img className={img} src={src} alt="" />;
};
