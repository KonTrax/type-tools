import expect, {TRU, FAL} from '@ktb/type-test'

import {
	ObjectType  as Target,
} from '@src/mapped-types/ObjectType'

//==============================================================================
//=== SETUP ===

let { TRU, FAL, equals: EQ } = expect

//==============================================================================
//=== TESTS ===

;{//============================================================================

//==============================================================================
//=== TESTS - Special Types ===

	//=== Param A ===

	/// CASE: Correctly handles - any
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = {
				[key :string] :any
		}
		type IN   = any
	}

	/// CASE: Correctly handles - unknown
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = {}
		type IN   = unknown
	}

	/// CASE: Correctly handles - never
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = never
		type IN   = never
	}

//===
//==============================================================================
//=== TESTS - Single - mutable ===

	//=== Basic ===

	/// CASE: Extracts - required
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { a  :1 }
	}

	/// CASE: Extracts - optional
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { a ?:1 }
	}

//===
//==============================================================================
//=== TESTS - Single - readonly ===

	//=== Basic ===

	/// CASE: Extracts - readonly required
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { readonly a  :1 }
	}

	/// CASE: Extracts - readonly optional
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { readonly a ?:1 }
	}

//===
//==============================================================================
//=== TESTS - Single - Types ===

	//=== Object ===

	/// CASE: Correctly handles - {}
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = {}
	}

	/// CASE: Correctly handles - object
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = object
	}

	/// CASE: Correctly handles - Object
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = Object
	}

//===
//==============================================================================
//=== TESTS - Union - Types ===

	//=== Basic - Mutable ===

	/// CASE: xxx - diff - none
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { a  :1 }
		/**/      | { a  :1 }
	}

	//=== Basic - Mutable ===

	/// CASE: xxx - diff - all values
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { a  :1 }
		/**/      | { a  :2 }
	}

	/// CASE: xxx - yyy
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { a  :1 }
		/**/      | { a ?:2 }
	}

	/// CASE: xxx - yyy
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { a ?:1 }
		/**/      | { a ?:2 }
	}

	//=== Basic - Readonly ===

	/// CASE: xxx - yyy
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { readonly a  :1 }
		/**/      | { readonly a ?:2 }
	}

	/// CASE: xxx - yyy
	;{TRU = EQ<EXP, Target <IN>>()
		type EXP  = IN
		type IN   = { readonly a ?:1 }
		/**/      | { readonly a ?:2 }
	}

//===
}//=============================================================================

//===
//==============================================================================
