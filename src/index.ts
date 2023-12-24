import { flexPlugin } from "./flex";
import { createProjectionState, projectionState } from "./state";
import { transactionFilter } from "./filter";
import { completions } from "./completions";
import type { ProjectionPluginConfig } from "./types";
import { style } from "./style";

export type { ProjectionPluginConfig };

export const projectionPlugin = (config: ProjectionPluginConfig) => [
  style,
  projectionState.init((state) => createProjectionState(state, config)),
  transactionFilter,
  flexPlugin,
];

export { completions };

export type { CursorPositionHandler, FocusGroup } from "./focus";
export { simpleProjection } from "./simpleProjection";
export {
  span,
  staticWidget,
  stringLiteralValue,
  stringLiteralValueChange,
  validateFromList
} from "./shared";
export  { svelteProjection } from "./svelteProjection";
export type { Projection } from "./types";

export { default as TextInput } from "./TextInput.svelte";
export { default as Keyword } from "./Keyword.svelte";
