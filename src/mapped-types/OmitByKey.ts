import { KeysU } from '../keys/Keys'
import { Pick } from './Pick'

/**
 * From `T` omit a set of properties `K`
 *
 * @param           T -
 * @param {keyof T} K -
 */
export type OmitByKey <T, K extends keyof T> =
		Pick<T, Exclude<keyof T, K>>

/**
 * From `T` omit a set of properties `K`
 *
 * - Distributes
 *
 * @param           T -
 * @param {keyof T} K -
 */
export type OmitByKeyU <T, K extends KeysU<T>> = T extends any
		? OmitByKey<T, Extract<keyof T, K>>
		: never
