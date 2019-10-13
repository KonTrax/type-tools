import expect, {TRU, FAL} from '@ktb/type-test'

import { AssignProps as Target } from '@src/mapped-types/AssignProps'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS ===

;{//============================================================================

	//=== TESTS - Special Types ===

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = {
			[x :string] :unknown // {} | 1
			[x :number] :unknown // {}
		}
		type IN_A = { a :1, b :1 }
		type IN_B = any
	}
	// ;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
	// 	type EXP  = { a :1, b :1 }
	// 	type IN_A = { a :1, b :1 }
	// 	type IN_B = unknown
	// }
	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :never, b :never }
		type IN_A = { a :1,     b :1 }
		type IN_B = never
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :1, b :1 }
		type IN_A = { a :1, b :1 }
		type IN_B = {}
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :2, b :1 }
		type IN_A = { a :1, b :1 }
		type IN_B = { a :2 }
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  = { a :1, b :1, c :2 }
		type IN_A = { a :1, b :1 }
		type IN_B = {             c :2 }
	}

	//=== TESTS - General ===

	/// TODO: Dows not handle unions correctly
	// ;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
	// 	type EXP  = { a :1, b :3 }
	// 						| { a :2, b :3 }
	// 	type IN_A = { a :1, b :1 }
	// 						| { a :2, b :2 }
	// 	type IN_B = {       b :3 }
	// 	type IN_Ba = Target<IN_A, IN_B>
	// }

	//=== TESTS - END ===

}//=============================================================================
