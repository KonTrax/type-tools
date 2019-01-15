import expect, {TRU, FAL} from '@ktb/type-test'

import {
	TypeName,
	TypeNameOf,
	TypeNameType,
} from '@src/core/TypeName'

//==============================================================================

let { TRU, FAL } = expect

//==============================================================================
;{ // CASE: TypeName returns same as the JS typeof

	//=== SETUP ===

	const ALL_TYPE_NAMES = typeof ({} as any)

	//=== TESTS ===

	;TRU = expect<TypeName>().equals(ALL_TYPE_NAMES)

	//=== TESTS - END ===
}
//==============================================================================
;{ // CASE: TypeNameOf & TypeNameType works correctly

	//=== SETUP ===

	type Test <T> = {
		name :TypeNameOf<T>
		base :TypeNameType<TypeNameOf<T>>
	}
	const exp = <T> (t ?:T) => expect<Test<T>>()

	//=== TESTS - Special Types ===

	;TRU = exp<any>().equals({} as {
		name :TypeName
		base :TypeNameType<TypeName>
	})
	;TRU = exp<unknown>().equals({} as {
		name :never
		base :never
	})
	;TRU = exp<never>().equals({} as {
		name :never
		base :never
	})

	//=== TESTS - Value Types - Primitives ===

	;TRU = exp<undefined>().equals({} as {
		name :'undefined'
		base :undefined
	})
	;TRU = exp<'abc'>().equals({} as {
		name :'string'
		base :string
	})
	;TRU = exp<(123)>().equals({} as {
		name :'number'
		base :number
	})
	;TRU = exp<(123n)>().equals({} as {
		name :'bigint'
		base :bigint
	})
	;TRU = exp<true>().equals({} as {
		name :'boolean'
		base :boolean
	})
	;TRU = exp(Symbol()).equals({} as {
		name :'symbol'
		base :symbol
	})

	//=== TESTS - Value Types - Object Types - Real ===

	;TRU = exp<() => void>().equals({} as {
		name :'function'
		base :Function
	})
	;TRU = exp<{}>().equals({} as {
		name :'object'
		base :object | null
	})

	//=== TESTS - Value Types - Object Types - Subtypes ===

	;TRU = exp<[]>().equals({} as {
		name :'object'
		base :object | null
	})
	;TRU = exp<null>().equals({} as {
		name :'object'
		base :object | null
	})

	//=== TESTS - END ===
}
//==============================================================================
