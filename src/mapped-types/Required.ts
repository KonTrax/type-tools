/**
 * Make all properties of types in union `T` required
 *
 * - Distributes
 *
 * @param T - union of types
 */
export type RequiredU <T> = T extends any
		? Required<T>
		: never
