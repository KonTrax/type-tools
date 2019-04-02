import expect, {TRU, FAL} from '@ktb/type-test'

import {
	OmitByValue  as Target,
	OmitByValueU as TargetU,
} from '@src/mapped-types/OmitByValue'

import { KeysU } from '@src/keys/Keys'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ, accepts: ACC, extends: EXT } = expect

type STR = string
type NUM = number

//==============================================================================
//=== TESTS ===

;{//============================================================================

//==============================================================================
//=== TESTS - Special Types ===

	//=== Param A ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type IN_A = any
		type IN_B = NUM

		type RES  = Target <IN_A, IN_B>
		type RESU = TargetU<IN_A, IN_B>
	}
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type IN_A = unknown
		type IN_B = NUM

		type RES  = Target <IN_A, IN_B>
		type RESU = TargetU<IN_A, IN_B>
	}
	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type EXPU = never
		type IN_A = never
		type IN_B = NUM

		type RES  = Target <IN_A, IN_B>
		type RESU = TargetU<IN_A, IN_B>
	}

	//=== Param B ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type IN_A = { a :1, b :1 }
		type IN_B = any
	}
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type IN_A = { a :1, b :1 }
		type IN_B = unknown
	}
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = { a :1, b :1 }
		type IN_A = { a :1, b :1 }
		type IN_B = never
	}

//===
//==============================================================================
//=== TESTS - Single - General ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = { a :STR }
		type IN_A = { a :STR, b :NUM }
		type IN_B = NUM
	}

//===
//==============================================================================
//=== TESTS - Single - Modifiers ===

	//=== Normal ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type IN_A = { a :1 }
		type IN_B = 1
	}

	//=== Optional ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = { a ?:1 }
		type IN_A = { a ?:1 }
		type IN_B = 1
	}

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type IN_A = { a ?:1 }
		type IN_B = 1 | undefined
	}

	//=== Readonly ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type IN_A = { readonly a :1 }
		type IN_B = 1
	}

//===
//==============================================================================
//=== TESTS - Union - General ===

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = { a :STR, b :STR | NUM }
		type EXPU = { a :STR, b :STR }
							| { a :STR }
		type IN_A = { a :STR, b :STR }
							| { a :STR, b :NUM }
		type IN_B = NUM

		type RES  = Target <IN_A, IN_B>
		type RESU = TargetU<IN_A, IN_B>
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = { b :STR | NUM }
		type EXPU = {}
							| { b :NUM }
		type IN_A = { a :STR, b :STR }
							| { a :STR, b :NUM }
		type IN_B = STR

		type RES  = Target <IN_A, IN_B>
		type RESU = TargetU<IN_A, IN_B>
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		// TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		TRU = EQ<KeysU<EXPU>, KeysU<TargetU<IN_A, IN_B>>>()
		TRU = ACC<EXPU, TargetU<IN_A, IN_B>>()
		TRU = EXT<EXPU, TargetU<IN_A, IN_B>>()

		type EXP  = {}
		type EXPU = {}
		type IN_A = { a :STR, b :STR }
							| { a :STR, b :NUM }
		type IN_B = NUM | STR

		type RES  = Target <IN_A, IN_B>
		type RESU = TargetU<IN_A, IN_B>
	}

//===
}//=============================================================================

//===
//==============================================================================
