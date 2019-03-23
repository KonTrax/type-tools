import { MergeKeys } from '../keys/MergeKeys'

/**
 * Extracts and merges props of all types in union `T`
 *
 * - Distributes
 *
 * @param T - union of types from which to merge props
 */
export type MergeProps <T extends object> =
		{ [K in MergeKeys<T>] :
				T extends Record<K, infer V> ? V : never
		}
