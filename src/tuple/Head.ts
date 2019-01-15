/**
 * Extract type of first element in tuple
 */
export type Head <T extends any[]> =
		T extends [infer H, ...any[]] ? H :
		T extends Array<infer R>      ? R : never
