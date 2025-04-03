// react-tableを使わない簡単なテーブル用コンポーネント

import { ReactElement } from "react";

import { TableProps } from "./types";
import Styles from "./table.module.css";

/**
 * <Table/>コンポーネント
 *
 * @description react-tableを使わない簡単なテーブル用コンポーネント
 * @param {TableProps} types.ts参照
 * @returns {ReactElement} コンポーネント
 */
export const Table = ({
  data,
  size,
  theadFixed = true,
  tableWidth,
  tableHeight,
}: TableProps): ReactElement => {
  const table = [
    Styles.table,
    size !== undefined ? Styles[`${size}`] : Styles.m,
  ];

  return (
    <div
      className={Styles.table_container}
      style={{
        maxWidth: `calc(${tableWidth} + 17px)`,
        ...(tableHeight && { height: tableHeight }),
      }}
    >
      <table className={table.join(" ")} style={{ width: tableWidth }}>
        <thead
          style={{
            ...(theadFixed && { position: "sticky", top: "0", zIndex: "3" }),
          }}
        >
          <tr className={Styles.tr}>
            {data?.header.map((item) => {
              return <th className={Styles.th}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.column.map((items) => {
            return (
              <tr className={Styles.tr}>
                {items.map((item: string | number) => {
                  return <td className={Styles.td}>{item}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
