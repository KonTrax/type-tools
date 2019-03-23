import { PropType } from '../mapped-types/PropType'

/**
 * From `T` get keys of properties whose type extends `BaseType`
 *
 * @param T        -
 * @param BaseType -
 *
 * // TODO: Review how to handle unions (should T be intersected?)
 */
export type KeysByValue <T, BaseType> =
		{ [K in keyof T] -?:
				PropType<T, K> extends BaseType ? K : never
		}[keyof T]
