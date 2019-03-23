/**
 * Make all properties of types in union `T` optional
 *
 * - Distributes
 *
 * @param T - union of types
 */
export type PartialU <T> = T extends any
		? Partial<T>
		: never
