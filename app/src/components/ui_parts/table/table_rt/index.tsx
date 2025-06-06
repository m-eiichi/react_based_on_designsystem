import { ReactElement } from "react";
import { flexRender } from "@tanstack/react-table";

import { TableRTProps } from "./types";
import Styles from "../table.module.css";

/**
 * <TableRt/>コンポーネント
 *
 * @description react-table用のコンポーネント
 * @param {TableRTProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const TableRT = <T,>({
  tableInstance,
  size,
  theadFixed = true,
  fixedColumn,
  tableHeight,
}: TableRTProps<T>): ReactElement => {
  const table = [
    Styles.table,
    size !== undefined ? Styles[`${size}`] : Styles.m,
  ];
  const maxWidth = tableInstance.getTotalSize() + 17;

  return (
    <div
      className={Styles.rt_table_container}
      style={{
        maxWidth: maxWidth + "px",
        ...(tableHeight && { height: tableHeight }),
      }}
    >
      <table
        className={table.join(" ")}
        {...{
          style: {
            width: tableInstance.getTotalSize(),
          },
        }}
      >
        <thead
          className={Styles.thead}
          style={{
            ...(theadFixed && { position: "sticky", top: "0", zIndex: "3" }),
          }}
        >
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr className={Styles.tr} key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                return (
                  <th
                    className={Styles.th}
                    {...(fixedColumn && Number(index) < fixedColumn
                      ? {
                          ...{
                            key: header.id,
                            colSpan: header.colSpan,
                            style: {
                              width: header.getSize(),
                              position: "sticky",
                              left: header.getStart(),
                              zIndex: 2,
                            },
                          },
                        }
                      : {
                          ...{
                            key: header.id,
                            colSpan: header.colSpan,
                            style: {
                              width: header.getSize(),
                            },
                          },
                        })}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={Styles.th_inner}
                        {...(header.column.getCanSort()
                          ? {
                              ...{
                                style: { cursor: "pointer" },
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              },
                            }
                          : "")}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanSort() ? (
                          <div className={Styles.sort}>
                            <span
                              className={Styles.sort_asc}
                              {...{
                                style: {
                                  color:
                                    header.column.getIsSorted() === "asc"
                                      ? "#333"
                                      : "#ccc",
                                },
                              }}
                            >
                              ▲
                            </span>

                            <span
                              className={Styles.sort_decs}
                              {...{
                                style: {
                                  color:
                                    header.column.getIsSorted() === "desc"
                                      ? "#333"
                                      : "#ccc",
                                },
                              }}
                            >
                              ▼
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                    <div
                      className={`${Styles.resizer} ${Styles.isResizing}`}
                      {...{
                        onDoubleClick: () => header.column.resetSize(),
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                      }}
                    />
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr
              className={Styles.tr}
              key={row.id}
              onClick={row.getToggleSelectedHandler()}
            >
              {row.getVisibleCells().map((cell, index) => (
                <td
                  className={Styles.td}
                  key={cell.id}
                  {...(fixedColumn && Number(index) < fixedColumn
                    ? {
                        style: {
                          position: "sticky",
                          left: cell.column.getStart(),
                          zIndex: 2,
                        },
                      }
                    : "")}
                >
                  <div>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
