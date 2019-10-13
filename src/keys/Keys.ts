import { UnionToIntersection } from '../union/UnionToIntersection'

/**
 * Extracts keys of type `T`
 *
 * - `Keys` is now just an alias of `keyof` as previous issue was fixed in TS 3.6
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
		? keyof T
		: never

/**
 * Extracts and merges keys of all types in intersection of union `T`
 *
 * - Intersects
 *
 * @param T - union of types from which to merge keys
 */
export type KeysI <T> = keyof UnionToIntersection<T>
