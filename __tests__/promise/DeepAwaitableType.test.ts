import expect, {TRU, FAL, Expect, Equals} from '@ktb/type-test'

import { DeepAwaitableType } from '@src/promise/DeepAwaitableType'

//==============================================================================

let { TRU, FAL } = expect

//==============================================================================
;{ // CASE: Works correctly

	//=== SETUP ===

	// const INVALID = Symbol()
	// type  INVALID = typeof INVALID

	// @ts-ignore
	type Test <T> = DeepAwaitableType<T>
	// type Constraint = any[]

	// function exp <T extends Constraint> (t ?:T) :Expect<Test<T>>
	// function exp <T>                    (t ?:T) :Expect<INVALID>
	// function exp                        (t ?:any) { return expect() as any }

	// function exp <T>                    (t ?:T) :Expect<Test<T>>
	// function exp                        (t ?:any) { return expect() as any }

	function expEqual <A, B> (opts :{IN :A, EXP :B})
	{
		type RES = Test<A>
		return expect.equals() as
				& Equals<RES, B>
				& { IN :A, EXP :B, RES :RES }
				// & { RES :RES }
	}

	//=== TESTS - Special Types ===

	;TRU = expEqual({} as { EXP :any,       IN :any })
	;TRU = expEqual({} as { EXP :unknown,   IN :unknown })
	;TRU = expEqual({} as { EXP :never,     IN :never })

	//=== TESTS - General ===

	;TRU = expEqual({} as { EXP :1,         IN :1 })
	;TRU = expEqual({} as { EXP :1,         IN :Promise<1> })
	;TRU = expEqual({} as { EXP :1,         IN :PromiseLike<1> })

	//=== TESTS - General ===

	;TRU = expEqual({} as { EXP :1,         IN :Promise<1> | Promise<1> })
	;TRU = expEqual({} as { EXP :1 | 2 | 3, IN :Promise<1> | Promise<2 | 3> })

	//=== TESTS - General ===

	;TRU = expEqual({} as { EXP :1,         IN :1 | Promise<1> | PromiseLike<1> })
	;TRU = expEqual({} as { EXP :1 | 2 | 3, IN :1 | Promise<2> | PromiseLike<3> })

	//=== TESTS - Depth - Deep ===

	;TRU = expEqual({} as {
			EXP : 1 | 2 | 3 | 4 | 5
			IN  : 1
					| Promise     <2 | Promise     <3>>
					| PromiseLike <4 | PromiseLike <5>>
	})
	;TRU = expEqual({} as {
			EXP : 1 | 2 | 3 | 4 | 5 | 6 | 7
			IN  : 1
					| Promise     <2 | Promise<3> | PromiseLike<4>>
					| PromiseLike <5 | Promise<6> | PromiseLike<7>>
	})

	;TRU = expEqual({} as {
			EXP : 1 | 1 | 1
			IN  : 1
					| Promise     <Promise     <1>>
					| PromiseLike <PromiseLike <1>>
	})
	;TRU = expEqual({} as {
			EXP : 1 | 2 | 3
			IN  : 1
					| Promise     <Promise     <2>>
					| PromiseLike <PromiseLike <3>>
	})

	//=== TESTS - END ===
}
//==============================================================================
