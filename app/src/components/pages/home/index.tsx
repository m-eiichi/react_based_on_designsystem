import { type ReactElement, useMemo } from "react";

// zodのインポート
import { z } from "zod";

//form
import { FormProvider } from "react-hook-form";
import { useCustomForm } from "@/hooks/useCustomForm.tsx";

// jotai関連のインポート
import { useSetAtom } from "jotai";
import { alertAtom } from "@/atoms";

import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import { useDialog } from "@/hooks/useDialog.tsx";

// import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui_elements/button/index.tsx";
// import { Container } from "@/components/ui_elements/container";
import { Box } from "@/components/ui_elements/box";
// import { CheckBox } from "@/components/ui_parts/input/check_box";
import { Label } from "@/components/ui_elements/label";
import { RadioButton } from "@/components/ui_parts/input/radio_button";
import { EditElement } from "@/components/ui_elements/input/edit_element";
import { SelectElement } from "@/components/ui_elements/input/select_element";
import { TableRT } from "@/components/ui_parts/table/table_rt";
import { createAnyValidate } from "@/utils/validation";
import { FlexContainer } from "@/components/ui_elements/flex_container";

const formSchema = z.object({
  c: createAnyValidate(),
  s: createAnyValidate(),
  r: createAnyValidate(),
});

// createColumnHelper用の型
type DataTypes = {
  title: string;
  director: string;
  releaseDate: string;
};
const adata = [
  {
    title: "A New Hope",
    director: "George Lucas",
    releaseDate: "1977-05-25",
  },
  {
    title: "The Empire Strikes Back",
    director: "Irvin Kershner",
    releaseDate: "1980-05-17",
  },
  {
    title: "Return of the Jedi",
    director: "Richard Marquand",
    releaseDate: "1983-05-25",
  },
  {
    title: "The Phantom Menace",
    director: "George Lucas",
    releaseDate: "1999-05-19",
  },
  {
    title: "Attack of the Clones",
    director: "George Lucas",
    releaseDate: "2002-05-16",
  },
  {
    title: "Revenge of the Sith",
    director: "George Lucas",
    releaseDate: "2005-05-19",
  },
];

export const Home = (): ReactElement => {
  const { openDialog } = useDialog();
  const data = useMemo(() => adata, []);
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
    s: "",
  };

  const methods = useCustomForm(formSchema, {
    defaultValues: defaultValues,
  });
  const { register, handleSubmit } = methods;

  // data

  const columnHelper = createColumnHelper<DataTypes>();

  const columns = [
    columnHelper.accessor("title", {
      header: "Title",
      id: "title",
      enableSorting: false,
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
    columnHelper.accessor("director", {
      header: () => <span>ディレクター</span>,
      id: "director",
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),

    columnHelper.accessor("releaseDate", {
      header: "Release Date",
      id: "release date",
      size: 500, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
  ];

  // テーブルの状態とロジックを管理するReactフック
  const table = useReactTable<DataTypes>({
    columns: columns,
    data: data,
    columnResizeMode: "onChange",
    // onRowSelectionChange: rowClick,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FlexContainer direction="column">
      <Box p="l" m="xl" hoverShadow backgroundColor={undefined}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FlexContainer alignItems="center">
              <EditElement
                // id="c"
                register={register("c",{onChange: (e) => console.log("onChange", e)})}
                // readonly
                // type="text"
                width="500px"
                // type="file"
                // numberSpin
                // multiple
              />
              <SelectElement
                name="ssssssssssssssssssssssssssssssssssssss"
                creatable
                options={[
                  { label: "a", value: "1" },
                  { label: "b", value: "2" },
                  { label: "c", value: "3" },
                  { label: "d", value: "4" },
                  { label: "e", value: "5" },
                ]}
                externalOnBlur={(value) => console.log("aaa", value)}
              />
            </FlexContainer>

            <RadioButton
              id="r"
              value="va"
              register={register("r")}
              checked
              readonly
              text="radio"
              width="500px"
            />
            <Button type="button" onClick={() => handlePasswordReset()}>
              アラート表示
            </Button>
            <Button>送信</Button>
          </form>
        </FormProvider>

        <Label text="a" />
      </Box>
      <Box p="l" m="xl" hoverShadow backgroundColor={undefined}>
        <TableRT tableInstance={table} size="s" tableHeight="350px" />
      </Box>
    </FlexContainer>
  );
};
