import { type ReactElement } from "react";
import { IconProps } from "./types.ts";
import Styles from "./icon.module.css";

export const Icon = ({
  style,
  src,
  size,
  type,
  alt,
}: IconProps): ReactElement => {
  const img = [
    Styles.img,
    size === undefined ? Styles.size_m : Styles[`size_${size}`],
    type === "circle" && Styles.circle,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={Styles.container}>
      <img className={img} style={style} src={src} alt={alt} />
    </div>
  );
};
