import expect, {TRU, FAL} from '@ktb/type-test'

import * as TS from '@src/core/ts/BaseType'
import * as JS from '@src/core/js/BaseType'

//==============================================================================

let { TRU, FAL } = expect

//==============================================================================
;{ // CASE: BaseType has correct types

	//=== SETUP ===

	type ALL_TYPES_JS = (
		| bigint
		| boolean
		| Function
		| number
		| object
		| string
		| symbol
		| undefined
	)
	type ALL_TYPES_TS = ALL_TYPES_JS | (
		| null
	)

	//=== TESTS ===

	;TRU = expect<TS.BaseType>().equals<ALL_TYPES_TS>()
	;TRU = expect<JS.BaseType>().equals<ALL_TYPES_JS>()

	//=== TESTS - END ===
}
//==============================================================================
;{ // CASE: BaseTypeOf works correctly

	//=== SETUP ===

	type Test <T> = {
		js :JS.BaseTypeOf<T>
		ts :TS.BaseTypeOf<T>
	}
	const exp = <T> (t ?:T) => expect<Test<T>>()

	//=== TESTS - Special Types ===

	;TRU = exp<any>().equals({} as {
		js :JS.BaseType
		ts :TS.BaseType
	})
	;TRU = exp<unknown>().equals({} as {
		js :never
		ts :never
	})
	;TRU = exp<never>().equals({} as {
		js :never
		ts :never
	})

	//=== TESTS - Value Types - Primitives ===

	;TRU = exp<undefined>().equals({} as {
		js :undefined
		ts :undefined
	})
	;TRU = exp<'abc'>().equals({} as {
		js :string
		ts :string
	})
	;TRU = exp<(123)>().equals({} as {
		js :number
		ts :number
	})
	;TRU = exp<(123n)>().equals({} as {
		js :bigint
		ts :bigint
	})
	;TRU = exp<true>().equals({} as {
		js :boolean
		ts :boolean
	})
	;TRU = exp(Symbol()).equals({} as {
		js :symbol
		ts :symbol
	})

	//=== TESTS - Value Types - Object Types - Real ===

	;TRU = exp<() => void>().equals({} as {
		js :Function
		ts :Function
	})
	;TRU = exp<{}>().equals({} as {
		js :object
		ts :object
	})

	//=== TESTS - Value Types - Object Types - Subtypes ===

	;TRU = exp<[]>().equals({} as {
		js :object
		ts :object
	})
	;TRU = exp<null>().equals({} as {
		js :object
		ts :null
	})

	//=== TESTS - END ===
}
//==============================================================================
