import { KeysU } from '../keys/Keys'

/**
 * Get prop types of `T` with optional key filter `K`
 *
 * @example
 * type res1  = PropType<{a:1, b:2}>;              // 1|2
 * type resU1 = PropType<{a:1, b:2} | {b:2, c:3}>; //   2
 * type resU2 = PropType<{a:1, b:2} | {b:0, c:3}>; // 0|2
 *
 * @param           T - type from which to extract prop types
 * @param {keyof T} K - optional key filter (only accepts common keys if `T` is a union)
 */
export type PropType <T, K extends keyof T = keyof T> = T[K]

/**
 * Get prop types of all types in union `T` with optional key filter `K`
 *
 * - Distributes
 *
 * @example
 * type res1  = PropTypeU<{a:1, b:2}>;              //   1|2
 * type resU1 = PropTypeU<{a:1, b:2} | {b:2, c:3}>; //   1|2|3
 * type resU2 = PropTypeU<{a:1, b:2} | {b:0, c:3}>; // 0|1|2|3
 *
 * @param           T - union of types from which to extract prop types
 * @param {keyof T} K - optional key filter (accepts keys from all types in union `T`)
 */
export type PropTypeU <T, K extends KeysU<T> = KeysU<T>> = T extends any
		? PropType<T, Extract<K, keyof T>>
		: never
