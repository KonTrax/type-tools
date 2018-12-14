export type MergeKeys <T extends object> = T extends any
		? keyof T
		: never
