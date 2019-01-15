import * as JS from '../js'

/**
 * Basetypes (TypeScript)
 */
export type BaseType = BaseTypeOf<any>

/**
 * Widen type `T` to it's base type (TypeScript)
 */
export type BaseTypeOf <T> =
		// Primitive
		// Non-Primitive
			| T extends null ? null
			: JS.BaseTypeOf<T>
