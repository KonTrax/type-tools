/**
 * Type `T` optionally wrapped in a `Promise`
 *
 * - Compatible with `await`
 *
 * @param T - Value type
 */
export type Awaitable <T> =
		| T
		| Promise<T>
		| PromiseLike<T>
