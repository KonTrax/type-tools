import { Awaitable } from '../promise'

/**
 * Basic Function
 *
 * @param {any[]} A - Arguments expected
 * @param {any}   R - Return type
 */
export type Func <A extends any[] = any[], R = any> =
		(...args :A) => R

/**
 * A function callable with `new`
 *
 * @param {any[]}  A - Arguments expected
 * @param {object} I - Return instance type
 */
export type NewableFunc <A extends any[] = any[], I extends object = object> =
		new (...args :A) => I

/**
 * A bound function
 *
 * @param {any}   This - The 'this' context of the function
 * @param {any[]} A    - Arguments expected
 * @param {any}   R    - Return type
 */
export type BoundFunc <This, A extends any[] = any[], R = any> =
		(this :This, ...args :A) => R

/**
 * Function returning a promise
 *
 * - Compatible with `async`
 *
 * @param {any[]} A - Arguments expected
 * @param {any}   R - Return type
 */
export type AsyncFunc <A extends any[] = any[], R = any> =
		Func<A, Promise<R>>

/**
 * Function compatible with the `await` statement
 *
 * - Compatible with `await`
 *
 * @param {any[]} A - Arguments expected
 * @param {any}   R - Return type
 */
export type AwaitableFunc <A extends any[] = any[], R = any> =
		Func<A, Awaitable<R>>
