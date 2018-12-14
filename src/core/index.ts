export * from './internal'

export type NIL       = null | undefined // REVIEW: | void

export type Primitive = string | number | boolean | symbol | NIL

// REVIEW: Naming, Organisation & Usefulness
// export namespace Type
// {
// 	export type Any   = NIL | Value

// 	export type Value = PrimitiveValue | Complex

// 	export type Primitive = PrimitiveValue | NIL

// 	export type PrimitiveValue = string | number | boolean | symbol

// 	/**
// 	 * Any object types
// 	 *
// 	 * - Includes `Function`, `Array<any>`, etc..
// 	 */
// 	export type Complex = object | Function | Array<any>
// }
