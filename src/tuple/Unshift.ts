/**
 * Prepend type to a tuple
 */
export type Unshift <T extends any[], Item> =
		((head :Item, ...orig :T) => any) extends ((...result :infer R) => any)
			? R
			: never
