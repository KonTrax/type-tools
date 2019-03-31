/**
 * Extract keys of properties whose type extends `BaseType` from type `T`
 *
 * @internal
 * @param T        -
 * @param BaseType -
 * @param K        -
 */
type _KeysByValue <T, BaseType, K extends keyof T> = K extends any
		? T[K] extends BaseType ? K : never
		: never

// Version B
// type _KeysByValue <T, BaseType, K extends keyof T> =
// 		{ [P in K] -?:
// 				T[P] extends BaseType ? P : never
// 		}[K]

/**
 * Extract keys of properties whose type extends `BaseType` from type `T`
 *
 * @param T        -
 * @param BaseType -
 */
// Version A
export type KeysByValue <T, BaseType> =
		_KeysByValue<T, BaseType, keyof T>

/**
 * Extract keys of properties whose type extends `BaseType` from all types in union `T`
 *
 * - Distributes
 *
 * @param T        -
 * @param BaseType -
 */
export type KeysByValueU <T, BaseType> = T extends any
		? _KeysByValue<T, BaseType, keyof T>
		: never
