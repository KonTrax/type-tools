/**
 * Exclude first element in tuple
 */
export type Tail <T extends any[]> =
		((...all :T) => any) extends ((head :T[0], ...tail :infer R) => any)
			? R
			: never
