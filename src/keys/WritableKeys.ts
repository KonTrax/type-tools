import { Equals } from '../comparison/Equals'

type _WritableKeys <T> =
		{ [K in keyof T] -?:Equals<
				{           [P in K]: T[K] },
				{ -readonly [P in K]: T[K] }, K, never
		>}[keyof T]

type _WritableKeysInverse <T> =
		{ [K in keyof T] -?:Equals<
				{           [P in K]: T[K] },
				{ -readonly [P in K]: T[K] }, never, K
		>}[keyof T]

/**
 * Extracts mutable keys of type `T`
 *
 * @param T - type from which to extract keys
 */
export type WritableKeys <T /*extends object*/> =
		[unknown] extends [T] ? keyof T :
		Exclude<keyof T, _WritableKeysInverse<T>>

/**
 * Extracts mutable keys of type `T`
 *
 * - Distributes
 *
 * @param T - type from which to extract keys
 */
export type WritableKeysU <T /*extends object*/> =
		[unknown] extends [T] ? keyof T : T extends any
			? _WritableKeys<T>
			: never
