import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

import Styles from "./main_layout.module.css";

export const MainLayout = (): ReactElement => {
  return (
    <main className={Styles.wrapper}>
      <div className={Styles.inner}>
        <Outlet />
      </div>
    </main>
  );
};
