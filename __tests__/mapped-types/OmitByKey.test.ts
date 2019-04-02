import expect, {TRU, FAL} from '@ktb/type-test'

import {
	OmitByKey  as Target,
	OmitByKeyU as TargetU,
} from '@src/mapped-types/OmitByKey'

import { KeysU } from '@src/keys/Keys'

// import * as TT from '@src'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS ===

;{//============================================================================

	//=== TESTS - Special Types ===

	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {}
		type IN  = any
	}
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = unknown
		type IN  = unknown
	}
	/// CASE: xxx
	;{TRU = EQ<EXP,  Target <IN, keyof IN>>()
		TRU = EQ<EXPU, TargetU<IN, keyof IN>>()
		type EXP  = {}
		type EXPU = never
		type IN   = never
	}

	//=== TESTS - General ===

	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {}
		type IN  = {}
	}
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {}
		type IN  = object
	}
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {}
		type IN  = Object
	}

	//=== TESTS - General ===

	/// CASE: xxx
	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = { b :12 | 22 }
		type EXPU = IN_A
		type IN_B = never
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	//=== TESTS - General ===

	/// CASE: xxx
	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type EXPU = { a :11 } | { c :23 }
		type IN_B = 'b'
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	/// CASE: xxx
	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = { a :11 | 21 }
		type EXPU = { a :11 } | { a :21 }
		type IN_B = 'b'
		type IN_A =
				| { a :11, b :12 }
				| { a :21, b :22 }
	}

	//=== TESTS - END ===

}//=============================================================================

//==============================================================================
//=== TESTS - TargetU only ===

;{//============================================================================

	//=== TESTS - General ===

	/// CASE: xxx
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = {} | { c :23 }
		type IN_B = 'a' | 'b'
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	//=== TESTS - General ===

	/// CASE: xxx
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = {}
		type IN_B = 'a'
		type IN_A = { a :1 }
	}
	/// CASE: xxx
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = {}
		type IN_B = 'a'
		type IN_A = { a ?:1 }
	}

	//=== TESTS - General ===

	/// CASE: xxx
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = {} | { b :3 }
		type IN_B = 'a'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b :3 }
	}

	/// CASE: xxx
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = {} | { b ?:3 }
		type IN_B = 'a'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b ?:3 }
	}

	/// CASE: xxx
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = {} | { b ?:3 }
		type IN_B = 'a'
		type IN_A =
				| {}
				| { a  :2, b ?:3 }
	}

	//=== TESTS - General ===

	/// CASE: xxx
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		TRU = EQ<KeysU<EXPU>, KeysU<TargetU<IN_A, IN_B>>>()
		type EXPU = {} | { b :3 }
		type IN_B = 'a'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b :3 }
	}

	/// CASE: xxx
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		TRU = EQ<KeysU<EXPU>, KeysU<TargetU<IN_A, IN_B>>>()
		type EXPU = {} | { b ?:3 }
		type IN_B = 'a'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b ?:3 }
	}

	//=== TESTS - General ===

	/// CASE: xxx
	;{
		// TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		TRU = EQ<KeysU<EXPU>, KeysU<TargetU<IN_A, IN_B>>>()
		type EXPU = {} | {}
		type IN_B = 'a' | 'b'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b :3 }
	}

	/// CASE: xxx
	;{
		// TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		TRU = EQ<KeysU<EXPU>, KeysU<TargetU<IN_A, IN_B>>>()
		type EXPU = {} | {}
		type IN_B = 'a' | 'b'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b ?:3 }
	}

	//=== TESTS - END ===

}//=============================================================================
