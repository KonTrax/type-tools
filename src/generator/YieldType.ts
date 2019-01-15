import { Yield } from './Yield'

export type YieldType <T extends Yield<any>> =
		T extends Yield<infer R>
				? R
				: never
