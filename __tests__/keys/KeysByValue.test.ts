import expect, {TRU, FAL} from '@ktb/type-test'

import {
	KeysByValue  as Target,
	KeysByValueU as TargetU,
} from '@src/keys/KeysByValue'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS ===

;{//============================================================================

	//=== TESTS - Special Types - T ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = keyof any
		type IN_A = any
		type IN_B = any
	}
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type IN_A = unknown
		type IN_B = any
	}
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type IN_A = never
		type IN_B = any
	}

	//=== TESTS - Special Types - BaseType ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = 'a' | 'b'
		type IN_A = { a :1, b :1 }
		type IN_B = any
	}
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = 'a' | 'b'
		type IN_A = { a :1, b :1 }
		type IN_B = unknown
	}
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type IN_A = { a :1, b :1 }
		type IN_B = never
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type IN_A = { a  :1 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = 'a'
		type IN_A = { a  :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type IN_A = { a ?:2 }
		type IN_B = 2
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type IN_A = { a :1 | 2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = 'a'
		type IN_A = { a :1 & 2 }
		type IN_B = 2
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = 'a'
		type IN_A = { readonly a  :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type IN_A = { readonly a ?:2 }
		type IN_B = 2
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = 'b'
		type EXPU = 'b'
		type IN_A = { a :1, b :2 }
		type IN_B = 2
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = 'a'
		type EXPU = 'a'
		type IN_A = { a :2 }
							| { a :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type EXPU = 'a'
		type IN_A = { a :1 }
							| { a :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type EXPU = never
		type IN_A = { a :1 }
							| { a :1 | 2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type EXPU = 'a'
		type IN_A = { a  :2 }
							| { a ?:2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = never
		type EXPU = never
		type IN_A = { a ?:2 }
							| { a ?:2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = 'a'
		type EXPU = 'a'
		type IN_A = { a  :2 }
							| { a  :2 | undefined }
		type IN_B = 2 | undefined
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = 'a'
		type EXPU = 'a'
		type IN_A = { a  :2 | undefined }
							| { a ?:2 }
		type IN_B = 2 | undefined
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = 'a' | 'b'
		type EXPU = 'a' | 'b'
		type IN_A = { a  :2, b :2 }
							| { a ?:2, b :2 }
		type IN_B = 2 | undefined
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = 'b'
		type EXPU = 'a' | 'b'
		type IN_A = { a :1, b :2 }
							| { a :2, b :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = 'b'
		type EXPU = 'b' | 'c'
		type IN_A = { a :1, b :2 }
							| { a :1, b :2, c :2 }
		type IN_B = 2
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  = 'c'
		type EXPU = 'b' | 'c'
		type IN_A = { a :1, b :1, c :2, d :    2 | 3 }
							| { a :1, b :2, c :2, d :1 | 2 }
		type IN_B = 2
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = 'b' | 'c' | 'd'
		type EXPU = 'b' | 'c' | 'd'
		type IN_A = { a :1, b :1, c :2, d :    2 | 3 }
							| { a :1, b :2, c :2, d :1 | 2 }
		type IN_B = 2 | 3
	}

	;{TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = 'a' | 'b'
		type EXPU = 'a' | 'b'
		type IN_A = { a :1, b :2 }
							| { a :2, b :2 }
		type IN_B = 2
	}

	;{TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = 'b' | 'c'
		type EXPU = 'b' | 'c'
		type IN_A = { a :1, b :2 }
							| { a :1, b :2, c :2 }
		type IN_B = 2
	}

	//=== TESTS - END ===

}//=============================================================================
