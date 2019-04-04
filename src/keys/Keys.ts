import { UnionToIntersection } from '../union/UnionToIntersection'

/**
 * Extracts keys of type `T`
 *
 * - Fixes issue with keyof on union of types with only one member and no members in common
 *
 * @example
 * FAL = EQ<Expect, keyof IN>();
 * TRU = EQ<Actual, keyof IN>();
 *
 * type Expect = never;
 * type Actual = 'a' & 'b';
 * type IN  = { a :1 } | { b :1 };
 *
 * @param T - type from which to extract keys
 */
export type Keys <T> = keyof T & (keyof T | null)

//=== ALT A-2 ===
// export type Keys <T> = [T & keyof T] extends [never] ? never : keyof T

//=== ORIGINAL ===
// export type Keys <T> = keyof T

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
