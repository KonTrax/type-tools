/**
 * A function callable with `new`
 *
 * @param {any[]}  A - Arguments expected
 * @param {object} I - Return instance type
 */
export type NewableFunc <A extends any[] = any[], I extends object = object> =
		new (...args :A) => I
