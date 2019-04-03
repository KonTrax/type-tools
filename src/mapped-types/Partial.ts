export { CustomPartial as Partial }

/**
 * Make all properties in `T` optional
 *
 * - Distributes
 * - Better readability in editor (for example see CustomPick)
 *
 * @param T -
 */
export type CustomPartial <T> = [T] extends [never] ? T :
		{ [P in keyof T] +?:T[P] }

/**
 * Make all properties of types in union `T` optional
 *
 * - Distributes
 * - Builtin version already distributes but included for consistency
 *
 * @param T - union of types
 */
export type PartialU <T> = T extends any
		? CustomPartial<T>
		: never
