---
to: <%= path %>/index.tsx
---

import { type ReactElement } from "react";
<%- require_props ? 'import {'+ h.changeCase.pascalCase(component_name) + 'Props} from "./types.ts";' : "" %>
<%- require_styles ? 'import Styles from "./' + component_name + '.module.css";' : "" %>

/**
 * <<%= h.changeCase.pascalCase(component_name) %>/>コンポーネント
 *
 * @description 
 * @param {<%= h.changeCase.pascalCase(component_name) %>Props} types.ts参照
 * @returns {ReactElement | null} コンポーネント
 */
 
export const <%= h.changeCase.pascalCase(component_name) %> = (
 <%- require_props ?  '{}:'+ h.changeCase.pascalCase(component_name) + 'Props':"" %>
): ReactElement => {
  return (
    <></>
  )
}