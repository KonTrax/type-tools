/**
 * Extract keys of properties whose type extends `BaseType` from type `T`
 *
 * @param T        -
 * @param BaseType -
 */
export type KeysByValue <T, BaseType, K extends keyof T = keyof T> = K extends any ?
			T[K] extends BaseType ? K : never
		: never

/**
 * Extract keys of properties whose type extends `BaseType` from all types in union `T`
 *
 * - Distributes
 *
 * @param T        -
 * @param BaseType -
 */
export type KeysByValueU <T, BaseType> = T extends any
		? KeysByValue<T, BaseType>
		: never
