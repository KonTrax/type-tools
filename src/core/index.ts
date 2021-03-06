export * from './internal'
export * from './TypeName'

import * as JS from './js'
import * as TS from './ts'
export { JS, TS }

export import BaseType   = TS.BaseType
export import BaseTypeOf = TS.BaseTypeOf

export type NIL = null | undefined // REVIEW: | void

export type Primitive =
		| string  | number | bigint
		| boolean | symbol
		| NIL

export type Nullable <T> = T | NIL
