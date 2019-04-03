import expect, {TRU, FAL} from '@ktb/type-test'

import {
	Pick  as Target,
	PickU as TargetU,
} from '@src/mapped-types/Pick'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

// Alias of builtin version
// type Target <T, K extends keyof T> = Pick<T, K>
type Builtin <T, K extends keyof T> = Pick<T, K>

//==============================================================================
//=== TESTS ===

namespace Single
{//=============================================================================

//==============================================================================
//=== Special Types ===

	/// CASE: Should operate identical to builtin version (Builtin) with non-union types
	;{TRU = EQ<EXP, Builtin<IN, keyof IN>>()
		TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {
			[x :string] :any
			[x :number] :any
		}
		type IN  = any
	}
	/// CASE: Should operate identical to builtin version (Builtin) with non-union types
	;{TRU = EQ<EXP, Builtin<IN, keyof IN>>()
		TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = unknown
		type IN  = unknown
	}
	/// CASE: Should operate identical to builtin version (Builtin) with non-union types
	;{TRU = EQ<EXP, Builtin<IN, keyof IN>>()
		TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP  = {}
		type IN   = never
	}

//===
//==============================================================================
//=== Special Objects ===

	/// CASE: Should operate identical to builtin version (Builtin) with non-union types
	;{TRU = EQ<EXP, Builtin<IN, keyof IN>>()
		TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {}
		type IN  = {}
	}
	/// CASE: Should operate identical to builtin version (Builtin) with non-union types
	;{TRU = EQ<EXP, Builtin<IN, keyof IN>>()
		TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = {}
		type IN  = object
	}
	/// CASE: Should operate identical to builtin version (Builtin) with non-union types
	;{TRU = EQ<EXP, Builtin<IN, keyof IN>>()
		TRU = EQ<EXP, Target <IN, keyof IN>>()
		TRU = EQ<EXP, TargetU<IN, keyof IN>>()
		type EXP = Object
		type IN  = Object
	}

//===
//==============================================================================
//=== Modifiers ===

	//=== Normal ===

	;{TRU = EQ<EXP, Builtin<IN, 'a'>>()
		TRU = EQ<EXP, Target <IN, 'a'>>()
		TRU = EQ<EXP, TargetU<IN, 'a'>>()
		type EXP  = { a  :1 }
		type IN   = { a  :1 }
	}
	;{TRU = EQ<EXP, Builtin<IN, 'a'>>()
		TRU = EQ<EXP, Target <IN, 'a'>>()
		TRU = EQ<EXP, TargetU<IN, 'a'>>()
		type EXP  = { a  :1 | undefined }
		type IN   = { a  :1 | undefined }
	}

	//=== Optional ===

	;{TRU = EQ<EXP, Builtin<IN, 'a'>>()
		TRU = EQ<EXP, Target <IN, 'a'>>()
		TRU = EQ<EXP, TargetU<IN, 'a'>>()
		type EXP  = { a ?:1 }
		type IN   = { a ?:1 }
	}
	;{TRU = EQ<EXP, Builtin<IN, 'a'>>()
		TRU = EQ<EXP, Target <IN, 'a'>>()
		TRU = EQ<EXP, TargetU<IN, 'a'>>()
		type EXP  = { a ?:1 }
		type IN   = { a ?:1 | undefined }
	}
	;{TRU = EQ<EXP, Builtin<IN, 'a'>>()
		TRU = EQ<EXP, Target <IN, 'a'>>()
		TRU = EQ<EXP, TargetU<IN, 'a'>>()
		type EXP  = { a ?:1 | undefined }
		type IN   = { a ?:1 | undefined }
	}

	//=== Readonly ===

	;{TRU = EQ<EXP, Builtin<IN, 'a'>>()
		TRU = EQ<EXP, Target <IN, 'a'>>()
		TRU = EQ<EXP, TargetU<IN, 'a'>>()
		type EXP  = { readonly a  :1 }
		type IN   = { readonly a  :1 }
	}
	;{TRU = EQ<EXP, Builtin<IN, 'a'>>()
		TRU = EQ<EXP, Target <IN, 'a'>>()
		TRU = EQ<EXP, TargetU<IN, 'a'>>()
		type EXP  = { readonly a  :1 | undefined }
		type IN   = { readonly a  :1 | undefined }
	}
	;{TRU = EQ<EXP, Builtin<IN, 'a'>>()
		TRU = EQ<EXP, Target <IN, 'a'>>()
		TRU = EQ<EXP, TargetU<IN, 'a'>>()
		type EXP  = { readonly a ?:1 }
		type IN   = { readonly a ?:1 | undefined }
	}

//===
//==============================================================================

}//=============================================================================

namespace Unions
{//=============================================================================

//==============================================================================
//=== General ===

	/// CASE: Should operate identical to builtin version (Builtin)
	;{TRU = EQ<EXP, Builtin<IN_A, IN_B>>()
		TRU = EQ<EXP, Target <IN_A, IN_B>>()
		TRU = EQ<EXP, TargetU<IN_A, IN_B>>()
		type EXP  = {}
		type IN_B = never
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP,  Builtin<IN_A, IN_B>>()
		TRU = EQ<EXP,  Target <IN_A, IN_B>>()
		TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXP  =
				| { b :12 | 22 }
		type EXPU =
				| { b :12 }
				| { b :22 }
		type IN_B = 'b'
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

//===
//==============================================================================
//=== TargetU only ===

	//=== TESTS - General ===

	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU =
				| { a :11, b :12 }
				| {        b :22 }
		type IN_B = 'a' | 'b'
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = { a :1 }
		type IN_B = 'a'
		type IN_A = { a :1 }
	}
	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU = { a ?:1 }
		type IN_B = 'a'
		type IN_A = { a ?:1 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU =
				| { a ?:1 }
				| { a  :2 }
		type IN_B = 'a'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b :3 }
	}

	;{TRU = EQ<EXPU, TargetU<IN_A, IN_B>>()
		type EXPU =
				| { a ?:1 }
				| { a  :2, b ?:3 }
		type IN_B = 'a' | 'b'
		type IN_A =
				| { a ?:1 }
				| { a  :2, b ?:3 }
	}

//===
//==============================================================================

}//=============================================================================

//===
//==============================================================================
