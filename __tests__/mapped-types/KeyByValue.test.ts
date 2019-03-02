import expect, {TRU, FAL} from '@ktb/type-test'

import { KeyByValue as Target } from '@src/mapped-types/KeyByValue'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS ===

;{//============================================================================

	//=== TESTS - Special Types ===

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = 'a' | 'b'
		type IN_A = { a :1, b :1 }
		type IN_B = any
	}
	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = 'a' | 'b'
		type IN_A = { a :1, b :1 }
		type IN_B = unknown
	}
	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = never
		type IN_A = { a :1, b :1 }
		type IN_B = never
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = 'b'
		type IN_A = { a :1, b :2 }
		type IN_B = 2
	}

	//=== TESTS - General ===

	/// TODO: Review how to handle unions (should T be intersected?)
	// ;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
	// 	type EXP  = 'b' | 'c'
	// 	type IN_A = { a :1, b :1, c :2 }
	// 						| { a :1, b :2, c :2 }
	// 	type IN_B = 2
	// }

	//=== TESTS - END ===

}//=============================================================================
