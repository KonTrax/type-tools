import expect, {TRU, FAL} from '@ktb/type-test'

import {
	Required  as Target,
	RequiredU as TargetU,
} from '@src/mapped-types/Required'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

// Alias of builtin version
// type Target <T> = Required<T>
type Builtin <T> = Required<T>

//==============================================================================
//=== TESTS ===

namespace Single
{//=============================================================================

//==============================================================================
//=== Special Types ===

	/// CASE: Should operate identical to builtin version (Target) with non-union types
	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = {
			[x :string] :any
			// [x :number] :any
		}
		type IN  = any
	}
	/// CASE: Should operate identical to builtin version (Target) with non-union types
	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = {}
		type IN  = unknown
	}
	/// CASE: Should operate identical to builtin version (Target) with non-union types
	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = never
		type IN   = never
	}

//===
//==============================================================================
//=== Special Objects ===

	/// CASE: Should operate identical to builtin version (Target) with non-union types
	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = {}
		type IN  = {}
	}
	/// CASE: Should operate identical to builtin version (Target) with non-union types
	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = object
		type IN  = object
	}
	/// CASE: Should operate identical to builtin version (Target) with non-union types
	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP = Target<IN>
		type IN  = Object
	}

//===
//==============================================================================
//=== Modifiers ===

	//=== Normal ===

	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = { a  :1 }
		type IN   = { a  :1 }
	}
	;{FAL = EQ<EXP, Builtin<IN>>()
		FAL = EQ<EXP, Target <IN>>()
		FAL = EQ<EXP, TargetU<IN>>()
		type EXP  = { a  :1 }
		type IN   = { a  :1 | undefined }
	}
	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = { a  :1 | undefined }
		type IN   = { a  :1 | undefined }
	}

	//=== Optional ===

	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = { a  :1 }
		type IN   = { a ?:1 }
	}
	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = { a  :1 }
		type IN   = { a ?:1 | undefined }
	}
	;{FAL = EQ<EXP, Builtin<IN>>()
		FAL = EQ<EXP, Target <IN>>()
		FAL = EQ<EXP, TargetU<IN>>()
		type EXP  = { a  :1 | undefined }
		type IN   = { a ?:1 | undefined }
	}

	//=== Readonly ===

	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = { readonly a  :1 }
		type IN   = { readonly a  :1 }
	}
	;{FAL = EQ<EXP, Builtin<IN>>()
		FAL = EQ<EXP, Target <IN>>()
		FAL = EQ<EXP, TargetU<IN>>()
		type EXP  = { readonly a  :1 }
		type IN   = { readonly a  :1 | undefined }
	}
	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  = { readonly a  :1 | undefined }
		type IN   = { readonly a  :1 | undefined }
	}

//===
//==============================================================================

}//=============================================================================

namespace Unions
{//=============================================================================

//==============================================================================
//=== General ===

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  =
				| {}
				| { a  :1 }
				| { b  :1 }
		type IN =
				| {}
				| { a ?:1 }
				| { b  :1 }
	}

	//=== TESTS - General ===

	;{TRU = EQ<EXP, Builtin<IN>>()
		TRU = EQ<EXP, Target <IN>>()
		TRU = EQ<EXP, TargetU<IN>>()
		type EXP  =
				| { a  :11, b  :12 }
				| {         b  :22, c  :23 }
		type IN =
				| { a ?:11, b ?:12 }
				| {         b  :22, c  :23 }
	}

//===
//==============================================================================

}//=============================================================================

//===
//==============================================================================
