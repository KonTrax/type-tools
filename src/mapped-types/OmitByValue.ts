import { KeysByValue } from '../keys/KeysByValue'
import { OmitByKey } from './OmitByKey'

// REVIEW: Should this omit by value-type or prop-type?

/**
 * From `T` omit properties whose type extends `BaseType`
 *
 * @param T        -
 * @param BaseType -
 */
export type OmitByValue <T, BaseType> =
		OmitByKey<T, KeysByValue<T, BaseType>>

/**
 * From `T` omit properties whose type extends `BaseType`
 *
 * - Distributes
 *
 * @param T        -
 * @param BaseType -
 */
export type OmitByValueU <T, BaseType> = T extends any
		? OmitByValue<T, BaseType>
		: never
