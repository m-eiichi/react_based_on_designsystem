---
to: "<%= require_props ? `${path}/types.ts` : null %>"
---

/**
 * <<%= h.changeCase.pascalCase(component_name) %>/>プロパティ
 *
 * @property
 */

export type <%= h.changeCase.pascalCase(component_name) %>Props = {

};

