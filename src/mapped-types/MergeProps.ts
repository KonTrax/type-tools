import { MergeKeys } from './MergeKeys'

export type MergeProps <T extends object> =
		{ [K in MergeKeys<T>] :
				T extends Record<K, infer V> ? V : never
		}
