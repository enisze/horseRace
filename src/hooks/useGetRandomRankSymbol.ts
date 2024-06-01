import { useAtomValue, useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { appendCardAtom, drawnCardsAtom } from '../contexts/GameContext'
import { rankSymbolList } from '../dataLists/rankSymbolList'
import type { LevelAction } from '../types/LevelAction.type'

function getRandomValueNotInArray<T>(
	sourceArray: T[],
	exclusionArray: T[],
): T | undefined {
	if (sourceArray.length === 0) {
		return undefined // Handle empty source array case
	}

	// Keep generating a random index until we find an element not in the exclusion array
	let randomIndex: number
	let randomValue: T | undefined

	do {
		randomIndex = Math.floor(Math.random() * sourceArray.length)
		randomValue = sourceArray[randomIndex]
	} while (randomValue && exclusionArray.includes(randomValue))

	return randomValue
}

export const useGetRandomRankSymbol = () => {
	const drawnCards = useAtomValue(drawnCardsAtom)
	const appendDrawnCard = useSetAtom(appendCardAtom)

	return useCallback(
		(action: LevelAction) => {
			const mappedCards = drawnCards.map((value) => value.rankSymbol)

			const card = getRandomValueNotInArray(rankSymbolList, mappedCards)

			if (!card) {
				return
			}

			appendDrawnCard({ rankSymbol: card, action })

			return card
		},
		[drawnCards, appendDrawnCard],
	)
}
