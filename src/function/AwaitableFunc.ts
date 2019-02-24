import { Awaitable } from '../promise'
import { Func } from './Func'

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
