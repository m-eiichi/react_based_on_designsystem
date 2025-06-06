import { type ReactElement } from "react";
import { Typography } from "@/components/ui_elements/typography/index.tsx";
import { Divider } from "@/components/ui_elements/divider/index.tsx";

import Styles from "./dialog_header.module.css";
import { DialogHeaderProps } from "./types.ts";

/**
 * <DialogHeader/>コンポーネント
 *
 * @description
 * @param {DialogHeaderProps} types.ts参照
 * @returns {ReactElement | null} コンポーネント
 */

export const DialogHeader = ({
  title,
  dialogHeaderRef,
}: DialogHeaderProps): ReactElement => {
  return (
    <div className={Styles.dialog_header} ref={dialogHeaderRef}>
      <div className={Styles.dialog_header_title_container}>
        <Typography
          size="h5"
          weight="normal"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
      </div>

      <Divider my="none" />
    </div>
  );
};
