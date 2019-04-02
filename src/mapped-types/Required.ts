/**
 * Make all properties of types in union `T` required
 *
 * - Distributes
 * - Builtin version already distributes but included for consistency
 *
 * @param T - union of types
 */
export type RequiredU <T> = T extends any
		? Required<T>
		: never
