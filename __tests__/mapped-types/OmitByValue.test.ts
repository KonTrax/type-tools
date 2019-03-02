import expect, {TRU, FAL} from '@ktb/type-test'

import { OmitByValue as Target } from '@src/mapped-types/OmitByValue'

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
	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = {}
		type IN_A = { a :1, b :1 }
		type IN_B = unknown
	}
	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :1, b :1 }
		type IN_A = { a :1, b :1 }
		type IN_B = never
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :1 }
		type IN_A = { a :1, b :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :1, b :1 }
							| { a :1 }
		type IN_A = { a :1, b :1 }
							| { a :1, b :2 }
		type IN_B = 2
	}

	//=== TESTS - END ===

}//=============================================================================
