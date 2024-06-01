import { useAtomValue, useSetAtom } from 'jotai'
import { useState, type FunctionComponent } from 'react'
import { View } from 'react-native'

import { drawnCardsAtom, incrementAtom } from '@/src/contexts/GameContext'
import { getSymbolFromRankSymbol } from '@/src/helpers/getSymbolFromRankSymbol'
import { useGetRandomRankSymbol } from '@/src/hooks/useGetRandomRankSymbol'
import type { LevelAction } from '@/src/types/LevelAction.type'
import type { RankSymbol } from '@/src/types/RankSymbol.type'
import BackCard from './BackCard'
import Card from './Card'

export const RandomCardSet: FunctionComponent = () => {
	const getRandomRankSymbol = useGetRandomRankSymbol()
	const increment = useSetAtom(incrementAtom)
	const lastCard = useGetLastRankSymbol('increment')

	const [randomSymbol, setRandomSymbol] = useState<RankSymbol | undefined>(
		lastCard,
	)

	return (
		<View className='flex flex-row space-x-2'>
			<BackCard
				onClick={() => {
					const rankSymbol: RankSymbol | undefined =
						getRandomRankSymbol('increment')
					setRandomSymbol(rankSymbol)

					const symbol = getSymbolFromRankSymbol(rankSymbol)

					increment(symbol)
				}}
			/>
			{randomSymbol && (
				<View>
					<Card rankSymbol={randomSymbol} />
				</View>
			)}
		</View>
	)
}

const useGetLastRankSymbol = (action: LevelAction): RankSymbol | undefined => {
	const drawnCards = useAtomValue(drawnCardsAtom)

	const filteredCardsByAction = drawnCards.filter(
		(card) => card.action === action,
	)
	const lastCard = filteredCardsByAction.at(-1)?.rankSymbol

	return lastCard
}
