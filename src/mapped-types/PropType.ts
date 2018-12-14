/**
 * Get prop types of `T` with optional key filter `K`
 *
 * @example
 * type res1  = PropType<{a:1, b:2}>;              // 1|2
 * type resU1 = PropType<{a:1, b:2} | {b:2, c:3}>; // 2
 * type resU2 = PropType<{a:1, b:2} | {b:0, c:3}>; // 0|2
 * type resI1 = PropType<{a:1, b:2} & {b:2, c:3}>; // 1|2|3
 * type resI2 = PropType<{a:1, b:2} & {b:0, c:3}>; // 1|3
 */
export type PropType <T, K extends keyof T = keyof T> = T[K]
