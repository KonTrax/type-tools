/**
 * Unwrap type if wrapped in a `Promise` (Deep)
 *
 * - Uses `PromiseLike`
 *
 * @example
 * type T0 = DeepPromiseType<'A'>;              // 'A'
 * type T1 = DeepPromiseType<Promise<'A'>>;     // 'A'
 * type T1 = DeepPromiseType<PromiseLike<'A'>>; // 'A'
 *
 * type T2 = DeepPromiseType<'A' | 'B'>;                   // 'A'|'B'
 * type T3 = DeepPromiseType<Promise<'A' | 'B'>>;          // 'A'|'B'
 * type T4 = DeepPromiseType<Promise<'A' | Promise<'B'>>>; // 'A'|'B'
 *
 * @see https://github.com/Microsoft/TypeScript/pull/21613
 */
export type DeepPromiseType <T> = { '1' :
		T extends PromiseLike<infer U>
				? DeepPromiseType<U>
				: T
}[T extends number ? '1' : '1']

// export type DeepPromiseType <T> = { '1' :
// 		T extends { then (onfulfilled :(value :infer U) => any) :any }
// 				? DeepPromiseType<U>
// 				: T
// }[T extends number ? '1' : '1']
