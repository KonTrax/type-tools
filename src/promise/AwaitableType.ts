/**
 * Unwrap type if wrapped in a `Promise` (shallow)
 *
 * - Uses `PromiseLike`
 *
 * @example
 * type T0 = AwaitableType<'A'>;              // 'A'
 * type T1 = AwaitableType<Promise<'A'>>;     // 'A'
 * type T1 = AwaitableType<PromiseLike<'A'>>; // 'A'
 *
 * type T2 = AwaitableType<'A' | 'B'>;                   // 'A'|'B'
 * type T3 = AwaitableType<Promise<'A'> | 'B'>;          // 'A'|'B'
 * type T4 = AwaitableType<Promise<'A'> | Promise<'B'>>; // 'A'|'B'
 */
export type AwaitableType <T> = T extends PromiseLike<infer U> ? U : T
