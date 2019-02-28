/**
 * Extracts keys of type `T`
 *
 * @param T - type from which to extract keys
 */
export type Keys <T> = keyof T

/**
 * Extracts and merges keys of all types in union `T`
 *
 * - Distributes
 *
 * @param T - union of types from which to merge keys
 */
export type KeysU <T> = T extends any
		? Keys<T>
		: never
