/**
 * Extracts and merges keys of all types in union `T`
 *
 * - Distributes
 *
 * @param T - union of types from which to merge keys
 */
export type MergeKeys <T> = T extends any
		? keyof T
		: never
