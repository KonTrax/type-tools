/**
 * Basic Function
 *
 * @param {any[]} A - Arguments expected
 * @param {any}   R - Return type
 */
export type Func <A extends any[] = any[], R = any> =
		(...args :A) => R
