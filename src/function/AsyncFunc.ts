import { Func } from './Func'

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
