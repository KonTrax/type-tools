/**
 * Get object-type of `T`
 *
 * - Distributes
 *
 * @param T -
 */
export type ObjectType <T /*extends object*/> = { [K in keyof T]: T[K] }
