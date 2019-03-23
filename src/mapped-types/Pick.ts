import { Keys, KeysU } from '../keys/Keys'

/**
 * From union `T` pick a set of properties `K` if present
 *
 * - Distributes
 *
 * @param T - union of types
 * @param K - union of keys present in types in union `T` to pick
 */
export type PickU <T, K extends KeysU<T>> =
		[T & K] extends [never] ? {} :
		T       extends any     ? Pick<T, Extract<K, Keys<T>>> :
		never
