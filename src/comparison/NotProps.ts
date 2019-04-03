import { KeysU } from '../keys/Keys'
import { ObjectType } from '../mapped-types/ObjectType'

/**
 * Filter out (exclude) type(s)
 *
 * @example
 *   type A = Record<'a'|'b', number>;
 *   type B = Record<'b'|'c', number>;
 *   function fn (arg :NotProps<A | B>) { return; }
 *   fn({ a: 1, b: 1 })       // OK
 *   fn({ b: 1, c: 1 })       // OK
 *   fn({ a: 1, b: 1, c: 1 }) // ERROR
 *
 * @param T - Types
 * @param K - Keys to disallow if present (defaults to keys of all types in union `T`)
 */
// export type NotProps <T /*extends object*/, K extends keyof any = KeysU<T>> =
// 		[K] extends [never] ? T :
// 		T extends unknown
// 			? T & { [P in Exclude<K, keyof T>] ?:never }
// 			: never

//=== ALT ===
export type NotProps <T /*extends object*/, K extends keyof any = KeysU<T>> =
		[K] extends [never] ? T :
		T extends unknown
			? ObjectType<T & { [P in Exclude<K, keyof T>] ?:never }>
			: never

//=== ALT ===
// export type NotProps <T /*extends object*/, K extends keyof any = KeysU<T>> =
// 		[K] extends [never] ? T :
// 		T extends unknown
// 			? [T & { [P in Exclude<K, keyof T>] ?:never }] extends [infer T2]
// 				? { [P in keyof T2] :T2[P] }
// 				: never
// 			: never

//=== ALT - object only ===
// export type NotProps <T /*extends object*/, K extends keyof any = KeysU<T & object>> =
// 		[K] extends [never] ? T :
// 		T extends object
// 			? [T & { [P in Exclude<K, keyof T>] ?:never }] extends [infer T2]
// 				? { [P in keyof T2] :T2[P] }
// 				: never
// 			: T

//=== ALT - object only ===
// export type NotProps <T /*extends object*/, K extends keyof any = KeysU<T & object>> =
// 		[K] extends [never] ? T :
// 		T extends object
// 			? T & { [P in Exclude<K, keyof T>] ?:never }
// 			: T
