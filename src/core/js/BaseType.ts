// tslint:disable:ban-types

/**
 * Basetypes (JavaScript)
 */
export type BaseType = BaseTypeOf<any>

/**
 * Widen type `T` to it's base type (JavaScript)
 */
export type BaseTypeOf <T> =
		// Primitive
			| T extends undefined ? undefined
			: T extends string    ? string
			: T extends number    ? number
			: T extends bigint    ? bigint
			: T extends boolean   ? boolean
			: T extends symbol    ? symbol
		// Non-Primitive
			: T extends Function  ? Function
			: T extends null      ? object
			: T extends object    ? object
			: never
