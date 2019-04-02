/**
 * Make all properties of types in union `T` optional
 *
 * - Distributes
 * - Builtin version already distributes but included for consistency
 *
 * @param T - union of types
 */
export type PartialU <T> = T extends any
		? Partial<T>
		: never
