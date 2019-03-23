import expect, {TRU, FAL} from '@ktb/type-test'

import {
	KeysByValue  as Target,
	KeysByValueU as TargetU,
} from '@src'

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

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = 'a'
		type IN_A = { a :2 }
							| { a :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = never
		type IN_A = { a :1 }
							| { a :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = never
		type IN_A = { a :1 }
							| { a :1 | 2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = never
		type IN_A = { a  :2 }
							| { a ?:2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = never
		type IN_A = { a ?:2 }
							| { a ?:2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = 'a'
		type IN_A = { a  :2 }
							| { a  :2 | undefined }
		type IN_B = 2 | undefined
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = 'a'
		type IN_A = { a  :2 | undefined }
							| { a ?:2 }
		type IN_B = 2 | undefined
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = 'a' | 'b'
		type IN_A = { a  :2, b :2 }
							| { a ?:2, b :2 }
		type IN_B = 2 | undefined
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = 'b'
		type IN_A = { a :1, b :2 }
							| { a :2, b :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = 'b'
		type IN_A = { a :1, b :2 }
							| { a :1, b :2, c :2 }
		type IN_B = 2
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type RES  = Target<IN_A, IN_B>
		type EXP  = 'c'
		type IN_A = { a :1, b :1, c :2, d :    2 | 3 }
							| { a :1, b :2, c :2, d :1 | 2 }
		type IN_B = 2
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type RES  = TargetU<IN_A, IN_B>
		type EXP  = 'b' | 'c' | 'd'
		type IN_A = { a :1, b :1, c :2, d :    2 | 3 }
							| { a :1, b :2, c :2, d :1 | 2 }
		type IN_B = 2 | 3
	}

	;{TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type RES  = TargetU<IN_A, IN_B>
		type EXP  = 'a' | 'b'
		type IN_A = { a :1, b :2 }
							| { a :2, b :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type RES  = TargetU<IN_A, IN_B>
		type EXP  = 'b' | 'c'
		type IN_A = { a :1, b :2 }
							| { a :1, b :2, c :2 }
		type IN_B = 2
	}

	//=== TESTS - END ===

}//=============================================================================
