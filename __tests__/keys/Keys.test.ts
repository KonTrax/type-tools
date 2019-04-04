import expect, {TRU, FAL} from '@ktb/type-test'

import {
	Keys  as Target,
	KeysI as TargetI,
	KeysU as TargetU,
} from '@src/keys/Keys'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS - Target ===

;{//============================================================================

	//=== TESTS - Special Types ===

	;{TRU = EQ<EXP, keyof IN>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetI<IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = keyof any
		type IN  = any
	}
	;{TRU = EQ<EXP, keyof IN>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetI<IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = unknown
	}
	;{TRU = EQ<EXP, keyof IN>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetI<IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = never
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, keyof IN>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetI<IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = keyof {}
		type IN  = {}
	}
	;{TRU = EQ<EXP, keyof IN>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetI<IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = keyof object
		type IN  = object
	}
	;{TRU = EQ<EXP, keyof IN>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetI<IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = keyof Object
		type IN  = Object
	}

	//=== TESTS - General ===

	// ;{TRU = EQ<EXP,  keyof IN>()
	;{FAL = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		// type EXP  = 'a' & 'b' & 'c'
		type EXP  = never
		type EXPI = 'a' | 'b' | 'c'
		type EXPU = 'a' | 'b' | 'c'
		type IN   =
				| { a :1 }
				| { b :2 }
				| { c :3 }
	}

	//=== TESTS - END ===

}//=============================================================================

//==============================================================================
//=== TESTS - Target vs TargetU ===

;{//============================================================================

	//=== TESTS - General ===

	;{FAL = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		// type EXP  =       'b'       & 'd'
		type EXP  = never
		type EXPI = 'a' | 'b' | 'c' | 'd'
		type EXPU = 'a' | 'b' | 'c' | 'd'
		type IN   =
				| { a :1, b :1 }
				| {       b :2, c :2 }
				| {                   d :3 }
	}

	//=== TESTS - END ===

}//=============================================================================

//==============================================================================
//=== TESTS - Target - Empty types issue ===

;{//============================================================================

	//=== ISSUE EXAMPLE ===

	/// CASE: This returns all keys intersected with none common keys (all one member only)
	;{FAL = EQ<Expect, keyof IN>()
		TRU = EQ<Actual, keyof IN>()

		type Expect = never
		type Actual = 'a' & 'b'
		type IN  = { a :1 } | { b :1 }
	}

	/// CASE: This correctly returns `never` with none common keys (not all one member only)
	;{TRU = EQ<Expect, keyof IN>()
		FAL = EQ<Actual, keyof IN>()

		type Expect = never
		type Actual = 'a' & 'b'
		type IN  = { a :1 } | { b :1, c :1 }
	}

	/// CASE: This correctly returns `never` with none common keys (not all one member only)
	;{TRU = EQ<Expect, keyof IN>()
		FAL = EQ<Actual, keyof IN>()

		type Expect = never
		type Actual = 'a' & 'b'
		type IN  = {} | { a :1 } | { b :1 }
	}

	//=== HELPERS ===

	const NUM_A = 0; type NUM_A = typeof NUM_A;
	const NUM_B = 1; type NUM_B = typeof NUM_B;

	const STR_A = 'a'; type STR_A = typeof STR_A;
	const STR_B = 'b'; type STR_B = typeof STR_B;

	const SYM_A = Symbol(); type SYM_A = typeof SYM_A;
	const SYM_B = Symbol(); type SYM_B = typeof SYM_B;

	type Obj <K extends keyof any, V = 1, FAKE = any> =
			[FAKE] extends [never] ? never :
			{ [P in K] :V }

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXPI = NUM_A | NUM_B | STR_A | STR_B | SYM_A | SYM_B
		type EXPU = NUM_A | NUM_B | STR_A | STR_B | SYM_A | SYM_B
		type EXP  = never
		type IN   =
				| Obj<STR_A | STR_B>
				| Obj<NUM_A | NUM_B>
				| Obj<SYM_A | SYM_B>
	}

	//=== TESTS - General ===

	;{FAL = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXPI = NUM_A | NUM_B | STR_A | STR_B | SYM_A | SYM_B
		type EXPU = NUM_A | NUM_B | STR_A | STR_B | SYM_A | SYM_B
		type EXP  = never
		type IN   =
				| Obj<STR_A> | Obj<STR_B>
				| Obj<NUM_A> | Obj<NUM_B>
				| Obj<SYM_A> | Obj<SYM_B>
	}

	;{FAL = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXPI = STR_A | STR_B
		type EXPU = STR_A | STR_B
		type EXP  = never
		type IN   =
				| Obj<STR_A> | Obj<STR_B>
	}

	;{FAL = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXPI = NUM_A | NUM_B
		type EXPU = NUM_A | NUM_B
		type EXP  = never
		type IN   =
				| Obj<NUM_A> | Obj<NUM_B>
	}

	;{FAL = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXPI = SYM_A | SYM_B
		type EXPU = SYM_A | SYM_B
		type EXP  = never
		type IN   =
				| Obj<SYM_A> | Obj<SYM_B>
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXPI = IN extends any ? keyof IN : never
		type EXPU = IN extends any ? keyof IN : never
		type EXP  = STR_A | NUM_A | SYM_A
		type IN   =
				| Obj<STR_A | NUM_A | SYM_A>
				& (
					| Obj<STR_A>
					| Obj<NUM_A>
					| Obj<SYM_A>
				)
	}

}//=============================================================================
