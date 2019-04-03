import { KeysU } from '../keys/Keys'

export { CustomPick as Pick }

/**
 * From `T`, pick a set of properties whose keys are in the union `K`
 *
 * - Distributes
 * - Better readability in editor
 *
 * @example
 *   type IN   = { a :1, b :2 };
 *   // Outputs: Pick<IN, 'a'> | Pick<IN, 'b'>
 *   type AA   = Pick<IN, 'a'> | Pick<IN, 'b'>;
 *   // Outputs: { a :1 } | { b :2 }
 *   type BB   = TT.Pick<IN, 'a'> | TT.Pick<IN, 'b'>;
 *
 * @param T -
 * @param K - union of keys in type `T` to pick
 */
export type CustomPick <T, K extends keyof T> = [T] extends [never] ? {} :
		{ [P in K] :T[P] }

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
		T       extends any     ? CustomPick<T, Extract<K, keyof T>> :
		never
