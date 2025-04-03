import { type ReactElement } from "react";
// import { Headline } from "@/components/ui_elements/headline";
import Styles from "./not_found.module.css";

export const NotFound = (): ReactElement => {
  return (
    <section className={Styles.large_section}>
      {/* <Headline size="xl">React Vite Project</Headline>
      <Headline size="m">&lt; 404 &gt;</Headline> */}
      <p>お探しのページは見つかりませんでした。</p>
    </section>
  );
};
