import { KeysU } from './Keys'

/**
 * Extracts and merges keys of all types in union `T`
 *
 * - Distributes
 *
 * @deprecated use `KeysU`
 * @param T - union of types from which to merge keys
 */
export type MergeKeys <T> = KeysU<T>
