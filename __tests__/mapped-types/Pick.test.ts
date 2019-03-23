import expect, {TRU, FAL} from '@ktb/type-test'

import {
	// Pick  as Target,
	PickU as TargetU,
} from '@src/mapped-types/Pick'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

type Target <T, K extends keyof T> = Pick<T, K>

//==============================================================================
//=== TESTS ===

;{//============================================================================

	//=== TESTS - Special Types ===

	/// CASE: Should operate identical to builtin `Pick` with non-union types
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {
			[x :string] :any
			[x :number] :any
		}
		type IN  = any
	}
	/// CASE: Should operate identical to builtin `Pick` with non-union types
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = unknown
		type IN  = unknown
	}
	/// CASE: Should operate identical to builtin `Pick` with non-union types
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP  = {}
		type IN   = never
	}

	//=== TESTS - General ===

	/// CASE: Should operate identical to builtin `Pick` with non-union types
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {}
		type IN  = {}
	}
	/// CASE: Should operate identical to builtin `Pick` with non-union types
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {}
		type IN  = object
	}
	/// CASE: Should operate identical to builtin `Pick` with non-union types
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = Object
		type IN  = Object
	}

	//=== TESTS - General ===

	/// CASE: Should operate identical to builtin `Pick` with union types and `never` as K
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type IN_B = never
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  =
				| { b :12 | 22 }
		type EXPU =
				| { b :12 }
				| { b :22 }
		type IN_B = 'b'
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	//=== TESTS - END ===

}//=============================================================================

//==============================================================================
//=== TESTS - TargetU only ===

;{//============================================================================

	//=== TESTS - General ===

	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU =
				| { a :11, b :12 }
				| {        b :22 }
		type IN_B = 'a' | 'b'
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = { a :1 }
		type IN_B = 'a'
		type IN_A = { a :1 }
	}
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = { a ?:1 }
		type IN_B = 'a'
		type IN_A = { a ?:1 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU =
				| { a ?:1 }
				| { a  :2 }
		type IN_B = 'a'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b :3 }
	}

	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU =
				| { a ?:1 }
				| { a  :2, b ?:3 }
		type IN_B = 'a' | 'b'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b ?:3 }
	}

	//=== TESTS - END ===

}//=============================================================================
