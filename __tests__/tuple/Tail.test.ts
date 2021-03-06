import expect, {TRU, FAL, Expect} from '@ktb/type-test'

import { Tail } from '@src/tuple/Tail'

//==============================================================================

let { TRU, FAL } = expect

//==============================================================================
;{ // CASE: Works correctly

	//=== SETUP ===

	const INVALID = Symbol()
	type  INVALID = typeof INVALID

	// @ts-ignore
	type Test <T>   = Tail<T>
	type Constraint = any[]

	function exp <T extends Constraint> (t ?:T) :Expect<Test<T>>
	function exp <T>                    (t ?:T) :Expect<INVALID>
	function exp                        (t ?:any) { return expect() as any }

	//=== TESTS - Special Types ===

	;{type IN  = any
		type EXP = any[]
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = unknown
		type EXP = INVALID
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = never
		type EXP = never
		;TRU = exp<IN>().equals<EXP>()}

	//=== TESTS - General ===

	;{type IN  = []
		type EXP = []
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = [1]
		type EXP = []
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = [1, 2, 3]
		type EXP = [2, 3]
		;TRU = exp<IN>().equals<EXP>()}

	//=== TESTS - General ===

	;{type IN  = [1?]
		type EXP = []
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = [1?, 2?]
		type EXP = [2?]
		;TRU = exp<IN>().equals<EXP>()}

	//=== TESTS - General ===

	;{type IN  = [1, ...Array<2|3>]
		type EXP = Array<2|3>
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = [1, 2, ...Array<2|3>]
		type EXP = [2, ...Array<2|3>]
		;TRU = exp<IN>().equals<EXP>()}

	//=== TESTS - General ===

	;{type IN  = [...Array<1|2|3>]
		type EXP = Array<1|2|3>
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = Array<1|2|3>
		type EXP = Array<1|2|3>
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = [...any[]]
		type EXP = any[]
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = [any?, ...any[]]
		type EXP = any[]
		;TRU = exp<IN>().equals<EXP>()}

	//=== TESTS - General ===

	;{type IN  = Parameters<() => void>
		type EXP = []
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = Parameters<(...args :any[]) => void>
		type EXP = any[]
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = Parameters<(a :1, ...args :any[]) => void>
		type EXP = any[]
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = Parameters<(a :1, b :2, ...args :any[]) => void>
		type EXP = [2, ...any[]]
		;TRU = exp<IN>().equals<EXP>()}

	//=== TESTS - General ===

	;{type IN  = {}
		type EXP = INVALID
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = { 0 :1, 1 :2 }
		type EXP = INVALID
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = { '0' :1, '1' :2 }
		type EXP = INVALID
		;TRU = exp<IN>().equals<EXP>()}

	;{type IN  = { 0 :1, 1 :2, length :2 }
		type EXP = INVALID
		;TRU = exp<IN>().equals<EXP>()}

	//=== TESTS - General ===

	;{type IN  = '123' | 123 | true | symbol
		type EXP = INVALID
		;TRU = exp<IN>().equals<EXP>()}

	//=== TESTS - END ===
}
//==============================================================================
