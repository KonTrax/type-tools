import { OmitByKey } from './OmitByKey'
import { KeyByValue } from './KeyByValue'

/**
 * From `T` omit properties of type `BaseType`
 */
export type OmitByValue <T, BaseType> = T extends any
		? OmitByKey<T, KeyByValue<T, BaseType>>
		: never
