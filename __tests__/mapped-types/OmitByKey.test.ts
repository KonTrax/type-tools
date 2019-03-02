import expect, {TRU, FAL} from '@ktb/type-test'

import { OmitByKey as Target } from '@src/mapped-types/OmitByKey'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS ===

;{//============================================================================

	//=== TESTS - Special Types ===

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = {}
		type IN_A = { a :1, b :1 }
		type IN_B = any
	}
	// ;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
	// 	type EXP  = {}
	// 	type IN_A = { a :1, b :1 }
	// 	type IN_B = unknown
	// }
	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :1, b :1 }
		type IN_A = { a :1, b :1 }
		type IN_B = never
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :1 }
		type IN_A = { a :1, b :1 }
		type IN_B = 'b'
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :1 }
							| { a :2 }
		type IN_A = { a :1, b :1 }
							| { a :2, b :2 }
		type IN_B = 'b'
	}

	//=== TESTS - Invalid ===

	// ;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
	// 	type EXP  = { a :1 }
	// 	type IN_A = { a :1, b :1 }
	// 						| { a :2}
	// 	type IN_B = 'b'
	// }

	//=== TESTS - END ===

}//=============================================================================
