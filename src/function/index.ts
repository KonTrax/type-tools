import { Awaitable } from '../promise'

/**
 * Basic Function
 *
 * @param {any}   R - Return type
 * @param {any[]} A - Arguments expected
 */
export type Func <R = any, A extends any[] = any[]> =
		| ((...args :A) => R)

/**
 * A function callable with `new`
 *
 * @param {object} I - Return instance type
 * @param {any[]}  A - Arguments expected
 */
export type NewableFunc <I extends object = object, A extends any[] = any[]> =
		| (new (...args :A) => I)

/**
 * A bound function
 *
 * @param {any}   This - The 'this' context of the function
 * @param {any}   R    - Return type
 * @param {any[]} A    - Arguments expected
 */
export type BoundFunc <This, R = any, A extends any[] = any[]> =
		| ((this :This, ...args :A) => R)

/**
 * Function returning a promise
 *
 * - Compatible with `async`
 *
 * @param {any}   R - Return type
 * @param {any[]} A - Arguments expected
 */
export type AsyncFunc <R = any, A extends any[] = any[]> =
		| Func<Promise<R>, A>

/**
 * Function compatible with the `await` statement
 *
 * - Compatible with `await`
 *
 * @param {any}   R - Return type
 * @param {any[]} A - Arguments expected
 */
export type AwaitableFunc <R = any, A extends any[] = any[]> =
		| Func<Awaitable<R>, A>
