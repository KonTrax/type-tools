/**
 * Equals
 *
 * @param A -
 * @param B -
 */
export type Equals <A, B, THEN = A, ELSE = never> =
		(<T> () => T extends A ? 1 : 2) extends
		(<T> () => T extends B ? 1 : 2) ? THEN : ELSE

// Version OLD
// export type Equals <T1, T2, THEN = T1, ELSE = never> =
// 		[T1 & T2] extends [never]   ? ELSE :
// 		[unknown] extends [T1 | T2] ? ELSE :
// 		[T1, T2]  extends [T2, T1]  ? THEN : ELSE
