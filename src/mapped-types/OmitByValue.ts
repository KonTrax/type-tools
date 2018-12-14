import { OmitByKey } from './OmitByKey'
import { KeyByValue } from './KeyByValue'

/**
 * From `T` omit properties of type `BaseType`
 */
export type OmitByValue <T extends object, BaseType> = T extends any
		? OmitByKey<T, KeyByValue<T, BaseType>>
		: never
