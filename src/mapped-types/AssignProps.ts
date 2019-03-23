import { KeysU } from '../keys/Keys'

/**
 * Assign properties from `T2` to `T1` (just like Object.assign)
 *
 * @param {any} T1 - Original props
 * @param {any} T2 - New props
 */
export type AssignProps <T1 extends object, T2 extends object> =
		{ [K in KeysU<T1 | T2>] :
				T2 extends Record<K, infer V2> ? V2 :
				T1 extends Record<K, infer V1> ? V1 : never
		}
