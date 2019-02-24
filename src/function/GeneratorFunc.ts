import { Yield } from '../generator'
import { Func } from './Func'

/**
 * Function compatible with the `yield` statement
 *
 * - Compatible with `yield`
 *
 * @param {any[]} A - Arguments expected
 * @param {any}   R - Return/yield type
 */
export type GeneratorFunc <A extends any[] = any[], R = any> =
		Func<A, Yield<R>>
