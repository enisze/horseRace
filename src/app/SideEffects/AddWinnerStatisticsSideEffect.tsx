import { winnerAtom } from '@/src/contexts/GameContext'
import { statisticsAtom } from '@/src/utils/statisticAtoms'
import { useAtom, useAtomValue } from 'jotai'
import { useEffect } from 'react'

export const AddWinnerStatisticsSideEffect = () => {
	const winner = useAtomValue(winnerAtom)

	const [_, addWin] = useAtom(statisticsAtom)

	useEffect(() => {
		if (winner) {
			addWin((prev) => {
				switch (winner) {
					case 'C': {
						return { ...prev, C: prev.C + 1 }
					}
					case 'D': {
						return { ...prev, D: prev.D + 1 }
					}
					case 'S': {
						return { ...prev, S: prev.S + 1 }
					}
					case 'H': {
						return { ...prev, H: prev.H + 1 }
					}
				}
			})
		}
	}, [addWin, winner])

	return <></>
}
