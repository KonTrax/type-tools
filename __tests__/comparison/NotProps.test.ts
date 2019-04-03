import expect, {TRU, FAL} from '@ktb/type-test'

import {
	NotProps as Target,
} from '@src/comparison/NotProps'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS ===

namespace Single
{//=============================================================================

//==============================================================================
//=== Special Types ===

	//=== Param A ===

	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP = {
			[x :string] :any
			// [x :number] :any
		}
		type IN  = any
	}
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP = unknown
		type IN  = unknown
	}
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = never
		type IN   = never
	}

	//=== Param B ===

	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		type EXP =
				& { [x :string] :undefined }
				& { a :1, b :2 }
		type IN_A = { a :1, b :2 }
		type IN_B = any
	}
	// /// CASE: xxx
	// ;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
	// 	type EXP  = unknown
	// 	type IN_A = { a :1, b :2 }
	// 	type IN_B = unknown
	// }
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN_A, IN_B>>()
		type EXP  = { a :1, b :2 }
		type IN_A = { a :1, b :2 }
		type IN_B = never
	}

//===
//==============================================================================
//=== Special Objects ===

	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP = {}
		type IN  = {}
	}
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP = object
		type IN  = object
	}
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP = Object
		type IN  = Object
	}

//===
//==============================================================================
//=== Modifiers ===

	//=== Normal ===

	;{TRU = EQ<EXP, Target <IN, 'a'>>()
		type EXP  = { a  :1 }
		type IN   = { a  :1 }
	}
	;{TRU = EQ<EXP, Target <IN, 'a'>>()
		type EXP  = { a  :1 | undefined }
		type IN   = { a  :1 | undefined }
	}

	//=== Optional ===

	;{TRU = EQ<EXP, Target <IN, 'a'>>()
		type EXP  = { a ?:1 }
		type IN   = { a ?:1 }
	}
	;{TRU = EQ<EXP, Target <IN, 'a'>>()
		type EXP  = { a ?:1 }
		type IN   = { a ?:1 | undefined }
	}
	;{TRU = EQ<EXP, Target <IN, 'a'>>()
		type EXP  = { a ?:1 | undefined }
		type IN   = { a ?:1 | undefined }
	}

	//=== Readonly ===

	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = { readonly a  :1 }
		type IN   = { readonly a  :1 }
	}
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = { readonly a  :1 | undefined }
		type IN   = { readonly a  :1 | undefined }
	}
	;{TRU = EQ<EXP, Target <IN>>()
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

	;{const exp = expect<Target<A | B>>()
		type  A   = Record<'a'|'b', number>;
		type  B   = Record<'b'|'c', number>;

		TRU = exp.accepts<{ a :1, b :1 }>()       // OK
		TRU = exp.accepts<{       b :1, c :1 }>() // OK
		FAL = exp.accepts<{ a :1, b :1, c :1 }>() // ERROR
	}

//===
//==============================================================================
//=== General ===

	/// CASE: xxx
	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  =
				| { a :11, b :12 }
				| {        b :22, c :23 }
		type IN_B = never
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	/// CASE: xxx
	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		type EXP  =
				| { a  :11,    b :12, c ?:never }
				| {            b :22, c  :23 }
		type IN_B = 'c'
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

	/// CASE: xxx
	;{TRU = EQ<EXP, Target<IN_A, IN_B>>()
		TRU = EQ<EXP, Target<IN_A>>()
		type EXP  =
				| { a  :11,    b :12, c ?:never }
				| { a ?:never, b :22, c  :23 }
		type IN_B = 'a' | 'b' | 'c'
		type IN_A =
				| { a :11, b :12 }
				| {        b :22, c :23 }
	}

//===
//==============================================================================
//=== Special Objects ===

	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP = { a :1 } | { a ?:never }
		type IN  = { a :1 } | {}
	}
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP = { a :1 } | { a ?:never } & object
		type IN  = { a :1 } | object
	}
	/// CASE: xxx
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP =
				| { a  :1 }     & { [K in keyof Object] ?:never }
				| { a ?:never } & Object
		type IN  = { a :1 } | Object
	}

//===
//==============================================================================
//=== Modifiers ===

	//=== Normal ===

	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  =
				| { a  :1, b ?:never }
				| { b  :1, a ?:never }
		type IN   =
				| { a  :1 }
				| { b  :1 }
	}
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  =
				| { a  :1 | undefined, b ?:never }
				| { b  :1 | undefined, a ?:never }
		type IN   =
				| { a  :1 | undefined }
				| { b  :1 | undefined }
	}

	//=== Optional ===

	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  =
				| { a ?:1, b ?:never }
				| { b ?:1, a ?:never }
		type IN   =
				| { a ?:1 }
				| { b ?:1 }
	}
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  =
				| { a ?:1, b ?:never }
				| { b ?:1, a ?:never }
		type IN   =
				| { a ?:1 | undefined }
				| { b ?:1 | undefined }
	}
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  =
				| { a ?:1 | undefined, b ?:never }
				| { b ?:1 | undefined, a ?:never }
		type IN   =
				| { a ?:1 | undefined }
				| { b ?:1 | undefined }
	}

	//=== Readonly ===

	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  =
				| { readonly a  :1, b ?:never }
				| { readonly b  :1, a ?:never }
		type IN   =
				| { readonly a  :1 }
				| { readonly b  :1 }
	}
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  =
				| { readonly a  :1 | undefined, b ?:never }
				| { readonly b  :1 | undefined, a ?:never }
		type IN   =
				| { readonly a  :1 | undefined }
				| { readonly b  :1 | undefined }
	}
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  =
				| { readonly a ?:1, b ?:never }
				| { readonly b ?:1, a ?:never }
		type IN   =
				| { readonly a ?:1 | undefined }
				| { readonly b ?:1 | undefined }
	}

//===
//==============================================================================

}//=============================================================================

//===
//==============================================================================
