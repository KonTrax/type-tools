export type MergeKeys <T> = T extends any
		? keyof T
		: never
