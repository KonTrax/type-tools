import { KeyByValue } from './KeyByValue'
import { OmitByKey } from './OmitByKey'

/**
 * From `T` omit properties of type `BaseType`
 */
export type OmitByValue <T, BaseType> = T extends any
		? OmitByKey<T, KeyByValue<T, BaseType>>
		: never
