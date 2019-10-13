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
			[x :string] :unknown
			[x :number] :unknown
		}
		type IN  = any
	}
	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = {}
		type IN  = unknown
	}
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

	//----------------------------------------------------------------------------

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a :1, b :1 | 2, c :2, d :3 }
		type IN  =
				| { a :1, b  :1 }
				| {       b ?:2, c :2 }
				| {                    d :3 }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a :1, b ?:1 | 2, c :2, d :3 }
		type IN  =
				| { a :1, b ?:1 }
				| {       b ?:2, c :2 }
				| {                    d :3 }
	}

	//=== TESTS - General ===

	;{const eq = expect<Target<{ a  :1 }>>().equals
		TRU = eq<{ a  :1 }>()
		FAL = eq<{ a ?:1 }>()
		FAL = eq<{ a  :1 | undefined }>()
		FAL = eq<{ a ?:1 | undefined }>()
	}

	;{const eq = expect<Target<{ a ?:1 }>>().equals
		FAL = eq<{ a  :1 }>()
		TRU = eq<{ a ?:1 }>()
		FAL = eq<{ a  :1 | undefined }>()
		TRU = eq<{ a ?:1 | undefined }>()
	}

	;{const eq = expect<Target<{ a  :1 | undefined }>>().equals
		FAL = eq<{ a  :1 }>()
		FAL = eq<{ a ?:1 }>()
		TRU = eq<{ a  :1 | undefined }>()
		FAL = eq<{ a ?:1 | undefined }>()
	}

	;{const eq = expect<Target<{ a ?:1 | undefined }>>().equals
		FAL = eq<{ a  :1 }>()
		TRU = eq<{ a ?:1 }>()
		FAL = eq<{ a  :1 | undefined }>()
		TRU = eq<{ a ?:1 | undefined }>()
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a  :1 | 2 }
		type IN  =
				| { a  :1 }
				| { a ?:2 }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a ?:1 | 2 }
		type IN  =
				| { a ?:1 }
				| { a ?:2 }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a  :1 | 2 | undefined }
		type IN  =
				| { a  :1 | undefined }
				| { a ?:2 }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a  :1 | 2 | undefined }
		type IN  =
				| { a  :1 | undefined }
				| { a ?:2 | undefined }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a  :1 | 2 }
		type IN  =
				| { a  :1 }
				| { a ?:2 | undefined }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a  :1 | 2 | undefined }
		type IN  =
				| { a  :1 }
				| { a  :2 | undefined }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { readonly a :1 | 2, readonly b :1 | 2 }
		type IN  =
				| {          a  :1,          b  :1 }
				| { readonly a  :2, readonly b ?:2 }
	}

	//=== TESTS - END ===

	//----------------------------------------------------------------------------

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a :1, b :1 }
		type IN  =
				| { a :1 }
				| { a :1, b  :1 }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a :1 | 2, b :3 }
		type IN  =
				| { a :1 }
				| { a :2, b  :3 }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a :1 | 2, b :2, c :2 }
		type IN  =
				| { a :1 }
				| { a :2, b :2, c :2 }
	}

	//=== TESTS - General ===

	/// CASE: Handles union of both empty and non-empty objects
	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { b :3 }
		type IN  =
				| {}
				| { b :3 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a :1, b ?:1 }
		type IN  =
				| { a :1 }
				| { a :1, b  ?:1 }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a :1 | 2, b :2 }
		type IN  =
				| { a  :1 }
				| { a ?:2, b  :2 }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a :1 | 2, b :1 | 2 }
		type IN  =
				| { a  :1, b ?:1 }
				| { a ?:2, b  :2 }
	}

	;{TRU = EQ<EXP, Target<IN>>()
		type EXP = { a ?:1 | 2, b :2 }
		type IN  =
				| { a ?:1 }
				| { a ?:2, b  :2 }
	}

	//=== TESTS - END ===

}//=============================================================================
