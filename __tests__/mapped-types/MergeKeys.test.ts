import expect, {TRU, FAL} from '@ktb/type-test'

import { MergeKeys as Target } from '@src/mapped-types/MergeKeys'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS ===

;{//============================================================================

	//=== TESTS - Special Types ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = keyof any
		type IN  = any
	}
	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = never
		type IN  = unknown
	}
	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = never
		type IN  = never
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = keyof {}
		type IN  = {}
	}
	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = keyof object
		type IN  = object
	}
	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = keyof Object
		type IN  = Object
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = 'a' | 'b' | 'c' | 'd'
		type IN  =
				| { a :1, b :1 }
				| {       b :2, c :2 }
				| {                   d :3 }
	}

	//=== TESTS - END ===

}//=============================================================================
