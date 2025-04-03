import { useMemo, type ReactElement } from "react";
import { ColumnDef, createColumnHelper, useReactTable, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";
import { TableRT } from "..";

// createColumnHelper用の型
type DataTypes = {
  title: string;
  director: string;
  releaseDate: string;
};

type TableRTWrapperProps = {
  size?: "s" | "m" | "l" | undefined;
  fixedColumn?: number | undefined;
  theadFixed?: boolean;
  tableHeight?: string;
};

export const TableRForStorybook = (props: TableRTWrapperProps): ReactElement => {
  // インスタンスはここで

  // data
  const defaultData = [
    { title: "A New Hope", director: "George Lucas", releaseDate: "1977-05-25" },
    { title: "The Empire Strikes Back", director: "Irvin Kershner", releaseDate: "1980-05-17" },
    { title: "Return of the Jedi", director: "Richard Marquand", releaseDate: "1983-05-25" },
    { title: "The Phantom Menace", director: "George Lucas", releaseDate: "1999-05-19" },
    { title: "Attack of the Clones", director: "George Lucas", releaseDate: "2002-05-16" },
    { title: "Revenge of the Sith", director: "George Lucas", releaseDate: "2005-05-19" },
  ];
  const columnHelper = createColumnHelper<DataTypes>();

  const columns: ColumnDef<DataTypes, any>[] = [
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

  // dataのメモ化
  const data = useMemo(() => defaultData, []);

  const table = useReactTable<DataTypes>({
    data: data,
    columns: columns,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <TableRT tableInstance={table} {...props} />
    </>
  );
};
