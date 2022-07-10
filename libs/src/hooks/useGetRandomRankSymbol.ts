import { useCallback } from 'react'
import { rankSymbolList } from '../../dataLists/rankSymbolList'
import { useGameContext } from '../helpers/GameContext'

export const useGetRandomRankSymbol = () => {
  const { drawnCards, appendDrawnCard } = useGameContext()

  return useCallback(() => {
    const max = rankSymbolList.length - 1

    let random = Math.floor(Math.random() * (max + 1))

    let card = rankSymbolList[random]

    while (drawnCards.includes(card)) {
      random = Math.floor(Math.random() * (max + 1))
      card = rankSymbolList[random]
    }

    appendDrawnCard(card)

    return card
  }, [drawnCards, appendDrawnCard])
}
