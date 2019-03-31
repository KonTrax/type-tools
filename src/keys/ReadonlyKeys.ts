import { Equals } from '../comparison/Equals'

type _ReadonlyKeys <T> =
		{ [K in keyof T] -?:Equals<
				{           [P in K]: T[K] },
				{ -readonly [P in K]: T[K] }, never, K
		>}[keyof T]

/**
 * Extracts readonly keys of type `T`
 *
 * @param T - type from which to extract keys
 */
export type ReadonlyKeys <T /*extends object*/> =
		[unknown] extends [T] ? keyof T :
		[_ReadonlyKeys<T>] extends [infer TK]
			? [unknown] extends [TK] ? never : TK
			: never

/**
 * Extracts readonly keys of type `T`
 *
 * - Distributes
 *
 * @param T - type from which to extract keys
 */
export type ReadonlyKeysU <T /*extends object*/> =
		[unknown] extends [T] ? keyof T : T extends any
			? _ReadonlyKeys<T>
			: never
