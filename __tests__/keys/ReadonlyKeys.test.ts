import expect, {TRU, FAL} from '@ktb/type-test'

import {
	ReadonlyKeys  as Target,
	ReadonlyKeysU as TargetU,
} from '@src/keys/ReadonlyKeys'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS - Target ===

;{//============================================================================

	//=== TESTS - Special Types ===

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = keyof any
		type IN  = any
	}
	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = unknown
	}
	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = never
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = {}
	}
	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = object
	}
	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = Object
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = { a  :1 }
	}

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = { a ?:1 }
	}

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = { a  :1 | undefined }
	}

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = never
		type IN  = { a ?:1 | undefined }
	}

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = 'a'
		type IN  = { readonly a :1 }
	}

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = 'a'
		type IN  = { readonly a ?:1 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = 'b'
		type IN  = { a :1, readonly b :1 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = never
		type IN   =
				| { a :1 }
				| { a :2 }
	}

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = never
		type IN   =
				| { a :1 }
				| { b :2 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = 'a'
		type IN   =
				| { readonly a :1 }
				| { readonly a :2 }
	}

	;{TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXP  = never
		type EXPU = 'a' | 'b'
		type IN   =
				| { readonly a :1 }
				| { readonly b :2 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXP  = 'a'
		type EXPU = 'a'
		type IN   =
				| {          a :1 }
				| { readonly a :2 }
	}

	;{TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXP  = never
		type EXPU = 'b'
		type IN   =
				| {          a :1 }
				| { readonly b :2 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  Target <IN>>()
		TRU = EQ<EXPU, TargetU<IN>>()
		type EXP  = never
		type EXPU = 'b'
		type IN  =
				| { a :1 }
				| { a :1, readonly b :1 }
	}

	//=== TESTS - END ===

}//=============================================================================
