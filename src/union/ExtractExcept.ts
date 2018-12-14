/**
 * @param T - Type(s)
 * @param U - Type(s) to extract
 * @param X - Type(s) to not extract
 *
 * // REVIEW: How to handle `unknown`
 */
export type ExtractExcept <T, U, X> =
		T extends U ?
		T extends X ? never : T : never
