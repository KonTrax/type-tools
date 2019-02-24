import expect, {TRU, FAL, Expect} from '@ktb/type-test'

import { Unshift } from '@src/tuple/Unshift'

import { Primitive } from '@src'

//==============================================================================

let { TRU, FAL } = expect

//==============================================================================
;{ // CASE: Works correctly

	//=== SETUP ===

	const INVALID = Symbol()
	type  INVALID = typeof INVALID

	type  INVALID_STRICT <T> = INVALID & [T]

	// @ts-ignore
	type Test <T, U> = Unshift<T, U>
	type Constraint  = any[]

	function exp <T extends Constraint, U> (t ?:T,   u ?:U) :Expect<Test<T, U>>
	function exp <T, U>                    (t ?:T,   u ?:U) :Expect<INVALID>
	function exp                           (t ?:any, u ?:any) { return expect() as any }

	function expStrict <T extends Constraint, U> (t ?:T,   u ?:U) :Expect<Test<T, U>>
	function expStrict <T, U>                    (t ?:T,   u ?:U) :Expect<INVALID_STRICT<Test<T, U>>>
	function expStrict                           (t ?:any, u ?:any) { return expect() as any }

	type IN_B = 0

	//=== TESTS - Special Types ===

	;{type IN_A = any
		type EXP  = [IN_B, ...any[]]
		;TRU = exp<IN_A, IN_B>().equals<EXP>()}

	;{type IN_A = unknown
		type EXP  = INVALID
		;TRU = exp<IN_A, IN_B>().equals<EXP>()}

	;{type IN_A = never
		type EXP  = never
		;TRU = exp<IN_A, IN_B>().equals<EXP>()}

	//=== TESTS - Tuples ===

	;{type IN_A = []
		type EXP  = [IN_B]
		;TRU = exp<IN_A, IN_B>().equals<EXP>()}

	;{type IN_A = [      1]
		type EXP  = [IN_B, 1]
		;TRU = exp<IN_A, IN_B>().equals<EXP>()}

	//=== TESTS - Tuples with rest ===

	;{type IN_A = [      any?, ...any[]]
		type EXP  = [IN_B, any?, ...any[]]
		;TRU = exp<IN_A, IN_B>().equals<EXP>()}

	;{type IN_A = [      1?, ...Array<number>]
		type EXP  = [IN_B, 1?, ...Array<number>]
		;TRU = exp<IN_A, IN_B>().equals<EXP>()}

	//=== TESTS - Arrays ===

	;{type IN_A =           Array<number>
		type EXP  = [IN_B, ...Array<number>]
		;TRU = exp<IN_A, IN_B>().equals<EXP>()}

	//=== TESTS - General - Invalid ===

	;{type EXP = INVALID_STRICT<never>
		;TRU = expStrict<Primitive, IN_B>().equals<EXP>()

		;TRU = expStrict<string,    IN_B>().equals<EXP>()
		;TRU = expStrict<number,    IN_B>().equals<EXP>()
		;TRU = expStrict<bigint,    IN_B>().equals<EXP>()
		;TRU = expStrict<boolean,   IN_B>().equals<EXP>()
		;TRU = expStrict<symbol,    IN_B>().equals<EXP>()

		;TRU = expStrict<null,      IN_B>().equals<EXP>()
		;TRU = expStrict<undefined, IN_B>().equals<EXP>()

		;TRU = expStrict<'123' | 123 | 123n | true | symbol, IN_B>().equals<EXP>()
	}

	;{type EXP = INVALID_STRICT<never>
		;TRU = expStrict<{  0  :1,  1  :2 },            IN_B>().equals<EXP>()
		;TRU = expStrict<{ '0' :1, '1' :2 },            IN_B>().equals<EXP>()
		;TRU = expStrict<{  0  :1,  1  :2, length :2 }, IN_B>().equals<EXP>()

		;TRU = expStrict<(() => void), IN_B>().equals<EXP>()
	}

	;{type EXP = INVALID_STRICT<[IN_B, ...any[]]>
		;TRU = expStrict<object,    IN_B>().equals<EXP>()
		;TRU = expStrict<Object,    IN_B>().equals<EXP>()
		;TRU = expStrict<{},        IN_B>().equals<EXP>()
	}

	//=== TESTS - END ===
}
//==============================================================================
