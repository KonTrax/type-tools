/**
 * Extracts optional keys of type `T`
 *
 * @internal
 * @param T - type from which to extract keys
 * @param K -
 */
type _OptionalKeys <T /*extends object*/, K extends keyof T> = Exclude<K,
		K extends any
			? { [P in K] -?:T extends { [_ in K] -?:T[K] } ? K : never }[K]
			: never
>

/**
 * Extracts optional keys of type `T`
 *
 * @param T - type from which to extract keys
 */
export type OptionalKeys <T /*extends object*/> =
		_OptionalKeys<T, keyof T>

/**
 * Extracts and merges optional keys of all types in union `T`
 *
 * - Distributes
 *
 * @param T - union of types from which to extract keys
 */
export type OptionalKeysU <T /*extends object*/> = T extends any
		? _OptionalKeys<T, keyof T>
		: never
