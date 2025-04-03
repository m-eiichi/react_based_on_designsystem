import { type ReactElement } from "react";

// zodのインポート
import { z } from "zod";

// jotai関連のインポート
import { useSetAtom } from "jotai";
import { alertAtom } from "@/atoms";

import { useDialog } from "@/hooks/useDialog.tsx";
import { useCustomForm } from "@/hooks/useCustomForm";
// import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui_elements/button/index.tsx";
// import { Container } from "@/components/ui_elements/container";
import { Box } from "@/components/ui_elements/box";
import { CheckBox } from "@/components/ui_parts/input/check_box";
import { RadioButton } from "@/components/ui_parts/input/radio_button";

import { createAnyValidate } from "@/utils/validation";

const formSchema = z.object({
  c: createAnyValidate(),
  r: createAnyValidate(),
});

export const Home = (): ReactElement => {
  const { openDialog } = useDialog();

  const setAlertData = useSetAtom(alertAtom);
  const handlePasswordReset = () => {
    setAlertData({
      title: "Alert Title",
      children: "alert detail description",
      // onClick: () => {
      //   // 処理を記述
      // },
    });
    openDialog("alert");
  };
  // const isLargeScreen = useMediaQuery({ query: "(max-width: 1280px)" });
  const defaultValues = {
    c: "",
    r: "",
  };

  const { register } = useCustomForm(formSchema, {
    defaultValues: defaultValues,
  });
  return (
    <Box
      p="l"
      m="xl"
      hoverShadow
      backgroundColor={undefined}
      onClick={() => console.log("aaa")}
    >
      <CheckBox
        id="c"
        value="c"
        register={register("c")}
        checked
        readonly
        disabled
        text="check"
        width="500px"
      />
      <RadioButton
        id="r"
        value="r"
        register={register("r")}
        checked
        readonly
        text="radio"
        width="500px"
      />
      <Button onClick={() => handlePasswordReset()}>アラート表示</Button>
    </Box>
  );
};
