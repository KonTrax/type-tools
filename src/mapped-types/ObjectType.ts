/**
 * Get object-type of `T`
 *
 * - Distributes
 *
 * @param T -
 */
export type ObjectType <T /*extends object*/> = [T] extends [never] ? T :
		{ [K in keyof T]: T[K] }
