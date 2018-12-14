/**
 * @param T - Type(s)
 * @param U - Type(s) to exclude
 * @param X - Type(s) to not exclude
 *
 * // REVIEW: How to handle `unknown`
 */
export type ExcludeExcept <T, U, X> =
		T extends U ?
		T extends X ? T : never : T
