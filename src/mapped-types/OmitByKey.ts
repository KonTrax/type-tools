/**
 * From `T` omit a set of properties `K`
 *
 * @param           T -
 * @param {keyof T} K -
 */
export type OmitByKey <T, K extends keyof T> = T extends any
		? Pick<T, Exclude<keyof T, K>>
		: never
