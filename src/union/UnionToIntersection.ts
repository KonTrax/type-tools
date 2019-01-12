/**
 * Convert union to intersection
 */
export type UnionToIntersection <U> = (
			U extends any ? (k :U) => void : never
	) extends (
			(k :infer I) => void
	)
			? I : never
