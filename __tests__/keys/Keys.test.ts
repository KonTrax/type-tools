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

	;{TRU = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXP  = 'a' & 'b' & 'c'
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

	;{TRU = EQ<EXP,  keyof IN>()
		TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPI, TargetI<IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXP  =       'b'       & 'd'
		type EXPI = 'a' | 'b' | 'c' | 'd'
		type EXPU = 'a' | 'b' | 'c' | 'd'
		type IN   =
				| { a :1, b :1 }
				| {       b :2, c :2 }
				| {                   d :3 }
	}

	//=== TESTS - END ===

}//=============================================================================
