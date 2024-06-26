import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useState, type FunctionComponent } from 'react'
import { View } from 'react-native'

import {
	currentLevelAtom,
	decrementAtom,
	drawnCardsAtom,
} from '@/src/contexts/GameContext'
import { getSymbolFromRankSymbol } from '@/src/helpers/getSymbolFromRankSymbol'
import { useGetRandomRankSymbol } from '@/src/hooks/useGetRandomRankSymbol'
import type { RankSymbol } from '@/src/types/RankSymbol.type'
import BackCard from './BackCard'
import Card from './Card'

interface RandomCardAutomatedProps {
	level: number
}

export const RandomCardAutomated: FunctionComponent<RandomCardAutomatedProps> =
	({ level }) => {
		const getRandomRankSymbol = useGetRandomRankSymbol()
		const decrement = useSetAtom(decrementAtom)
		const currentLevel = useAtomValue(currentLevelAtom)
		const drawnCards = useAtomValue(drawnCardsAtom)

		const initialCard = useGetDecrementCardByLevel(level)
		const [randomSymbol, setRandomSymbol] = useState<RankSymbol | undefined>(
			initialCard,
		)
		useEffect(() => {
			if (currentLevel >= level && !randomSymbol) {
				const rankSymbol = getRandomRankSymbol('decrement')
				setRandomSymbol(rankSymbol)

				const symbol = getSymbolFromRankSymbol(rankSymbol)
				decrement(symbol)
			}

			//On reset
			if (drawnCards.length === 0) {
				setRandomSymbol(undefined)
			}
		}, [
			currentLevel,
			level,
			getRandomRankSymbol,
			decrement,
			drawnCards,
			randomSymbol,
		])

		return (
			<View>
				{randomSymbol ? (
					<View>
						<Card rankSymbol={randomSymbol} />
					</View>
				) : (
					<BackCard />
				)}
			</View>
		)
	}

const useGetDecrementCardByLevel = (level: number): RankSymbol | undefined => {
	const drawnCards = useAtomValue(drawnCardsAtom)

	const cards = drawnCards.filter((card) => card.action === 'decrement')
	if (cards.length >= level) {
		return cards[level - 1]?.rankSymbol
	}
	return undefined
}
