export { CustomRequired as Required }

/**
 * Make all properties in `T` required
 *
 * - Distributes
 * - Better readability in editor (for example see CustomPick)
 *
 * @param T -
 */
export type CustomRequired <T> = [T] extends [never] ? T :
		{ [P in keyof T] -?:T[P] }

/**
 * Make all properties of types in union `T` required
 *
 * - Distributes
 * - Builtin version already distributes but included for consistency
 *
 * @param T - union of types
 */
export type RequiredU <T> = T extends any
		? CustomRequired<T>
		: never
