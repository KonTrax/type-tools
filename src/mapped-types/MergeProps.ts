import { KeysI } from '../keys/Keys'

/**
 * Extracts and merges props of all types in union `T`
 *
 * - Intersects
 *
 * - Preserves:
 *   - readonly
 *   - optional _(required overrides optional)_
 *
 * - union:   `{ a :1 } | { a ?:2 }`
 * - becomes: `{ a :1 | 2 }`
 *
 * - union:   `{ a ?:1 } | { a ?:2 }`
 * - becomes: `{ a ?:1 | 2 }`
 *
 * - union:   `{ a :1 } | { readonly a :2 }`
 * - becomes: `{ readonly a :1 | 2 }`
 *
 * @deprecated use `PropsI`
 *
 * @param T - union of types from which to merge props
 */
export type MergeProps <T /*extends object*/> =
		{ [K in KeysI<T>] :
				T extends { [P1 in K]  :infer V1} ? V1 :
				T extends { [P2 in K] ?:infer V2} ? V2 : never
		}
