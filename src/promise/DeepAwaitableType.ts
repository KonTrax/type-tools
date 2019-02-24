/**
 * Unwrap type if wrapped in a `Promise` (Deep)
 *
 * - Uses `PromiseLike`
 *
 * @example
 * type T0 = DeepAwaitableType<'A'>;              // 'A'
 * type T1 = DeepAwaitableType<Promise<'A'>>;     // 'A'
 * type T1 = DeepAwaitableType<PromiseLike<'A'>>; // 'A'
 *
 * type T2 = DeepAwaitableType<'A' | 'B'>;                   // 'A'|'B'
 * type T3 = DeepAwaitableType<Promise<'A' | 'B'>>;          // 'A'|'B'
 * type T4 = DeepAwaitableType<Promise<'A' | Promise<'B'>>>; // 'A'|'B'
 *
 * @see https://github.com/Microsoft/TypeScript/pull/21613
 */
export type DeepAwaitableType <T> = { '1' :
		T extends PromiseLike<infer U>
				? DeepAwaitableType<U>
				: T
}[T extends number ? '1' : '1']

// export type DeepAwaitableType <T> = { '1' :
// 		T extends { then (onfulfilled :(value :infer U) => any) :any }
// 				? DeepAwaitableType<U>
// 				: T
// }[T extends number ? '1' : '1']
