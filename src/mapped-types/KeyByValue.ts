import { PropType } from './PropType'

/**
 * @param T        -
 * @param BaseType -
 */
export type KeyByValue <T, BaseType> =
		{ [K in keyof T] :
				PropType<T, K> extends BaseType ? K : never
		}[keyof T]
