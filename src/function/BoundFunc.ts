/**
 * A bound function
 *
 * @param {any}   This - The 'this' context of the function
 * @param {any[]} A    - Arguments expected
 * @param {any}   R    - Return type
 */
export type BoundFunc <This = any, A extends any[] = any[], R = any> =
		(this :This, ...args :A) => R
