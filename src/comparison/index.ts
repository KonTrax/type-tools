import { TRU, FAL, BOL } from '../core'

//==============================================================================

type NEV = never
type UNK = unknown

//==============================================================================

export type Special <T, THEN, ELSE = NEV> =
		[UNK] extends [T]   ? THEN : // unknown | any
		[T]   extends [NEV] ? THEN : // never
		ELSE

export type Never <T, THEN, ELSE = NEV> =
		[UNK] extends [T]   ? ELSE : // unknown | any
		[T]   extends [NEV] ? THEN : // never
		ELSE

export type UnknownOrAny <T, THEN, ELSE = NEV> =
		[UNK] extends [T]   ? THEN : // unknown | any
		[T]   extends [NEV] ? ELSE : // never
		ELSE

export type Unknown <T, THEN, ELSE = NEV> =
		[UNK, keyof T] extends [T, NEV] ? THEN : // unknown
		ELSE

export type Any <T, THEN, ELSE = NEV> =
		[UNK, keyof any] extends [T, keyof T] ? THEN : // any
		ELSE

export type Value <T, THEN = T, ELSE = NEV> =
		Special<T, ELSE, THEN>

//==============================================================================

export type Extends <T1, T2, THEN = T1, ELSE = NEV> =
		[T1 & T2] extends [NEV]     ? ELSE :
		[unknown] extends [T1 | T2] ? ELSE :
		[T1]      extends [T2]      ? THEN : ELSE

export type Accepts <T1, T2, THEN = T1, ELSE = NEV> =
		Extends<T2, T1, THEN, ELSE>

export type Equals <T1, T2, THEN = T1, ELSE = NEV> =
		[T1 & T2] extends [NEV]     ? ELSE :
		[unknown] extends [T1 | T2] ? ELSE :
		[T1, T2]  extends [T2, T1]  ? THEN : ELSE

//==============================================================================
