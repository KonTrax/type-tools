export * from './internal'

export type NIL = null | undefined // REVIEW: | void

export type Primitive =
		| string  | number | bigint
		| boolean | symbol
		| NIL
