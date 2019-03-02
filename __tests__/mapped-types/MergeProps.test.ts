import expect, {TRU, FAL} from '@ktb/type-test'

import { MergeProps as Target } from '@src/mapped-types/MergeProps'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS ===

;{//============================================================================

	//=== TESTS - Special Types ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = {
			[x :string] :{}
			[x :number] :{}
		}
		type IN  = any
	}
	// ;{TRU = EQ<EXP, Target<IN>>()
	// 	type EXP = never
	// 	type IN  = unknown
	// }
	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = {}
		type IN  = never
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = {}
		type IN  = {}
	}
	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = {}
		type IN  = object
	}
	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = Object
		type IN  = Object
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a :1, b :1 | 2, c :2, d :3 }
		type IN  =
				| { a :1, b :1 }
				| {       b :2, c :2 }
				| {                   d :3 }
	}

	//=== TESTS - END ===

}//=============================================================================
