import { DefaultDialogContent } from "../default_dialog_content";
import { DialogButtonArea } from "../dialog_button_area";

export const DefaultDialogContentForSb = () => {
  return (
    <DefaultDialogContent size="l" title="Dialog Title">
      dialog children dialog children dialog children dialog children dialog
      children dialog children dialog children dialog children dialog children
      dialog children dialog children dialog children dialog children dialog
      children dialog children dialog children dialog children dialog children
      dialog children
      <DialogButtonArea
        primaryButton={{ children: "プライマリーボタン" }}
        secondaryButton={{ children: "セカンダリーボタン" }}
      />
    </DefaultDialogContent>
  );
};
