/**
 * Unwrap type if wrapped in a `Promise` (shallow)
 *
 * - Uses `PromiseLike`
 *
 * @example
 * type T0 = PromiseType<'A'>;              // 'A'
 * type T1 = PromiseType<Promise<'A'>>;     // 'A'
 * type T1 = PromiseType<PromiseLike<'A'>>; // 'A'
 *
 * type T2 = PromiseType<'A' | 'B'>;                   // 'A'|'B'
 * type T3 = PromiseType<Promise<'A'> | 'B'>;          // 'A'|'B'
 * type T4 = PromiseType<Promise<'A'> | Promise<'B'>>; // 'A'|'B'
 */
export type PromiseType <T> = T extends PromiseLike<infer U> ? U : T
