/**
 * Extracts required keys of type `T`
 *
 * @internal
 * @param T - type from which to extract keys
 * @param K -
 */
type _RequiredKeys <T /*extends object*/, K extends keyof T> = Exclude<K,
		K extends any
			? { [P in K] -?:T extends { [_ in K] -?:T[K] } ? never : K }[K]
			: never
>

/**
 * Extracts required keys of type `T`
 *
 * @param T - type from which to extract keys
 */
export type RequiredKeys <T /*extends object*/> =
		_RequiredKeys<T, keyof T>

/**
 * Extracts and merges required keys of all types in union `T`
 *
 * - Distributes
 *
 * @param T - union of types from which to extract keys
 */
export type RequiredKeysU <T /*extends object*/> = T extends any
		? _RequiredKeys<T, keyof T>
		: never
