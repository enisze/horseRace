import { atom } from 'jotai'
import { atomWithStorage, selectAtom } from 'jotai/utils'

export const statisticsAtom = atomWithStorage('statistics', {
	H: 0,
	D: 0,
	S: 0,
	C: 0,
})

export const totalAtom = atom((get) => {
	const { H, C, D, S } = get(statisticsAtom)
	return H + C + D + S
})

export const valuesAtom = selectAtom(statisticsAtom, (s) => [
	s.C,
	s.D,
	s.S,
	s.H,
])
