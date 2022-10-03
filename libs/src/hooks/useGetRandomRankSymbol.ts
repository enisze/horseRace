import { useCallback } from 'react'
import { rankSymbolList } from '../../dataLists/rankSymbolList'
import { LevelAction } from '../../types/LevelAction.type'
import { useGameContext } from '../contexts/GameContext'

export const useGetRandomRankSymbol = () => {
  const { drawnCards, appendDrawnCard } = useGameContext()

  return useCallback(
    (action: LevelAction) => {
      const max = rankSymbolList.length - 1

      let random = Math.floor(Math.random() * (max + 1))

      let card = rankSymbolList[random]

      while (drawnCards.map((value) => value.rankSymbol).includes(card)) {
        random = Math.floor(Math.random() * (max + 1))
        card = rankSymbolList[random]
      }

      appendDrawnCard({ rankSymbol: card, action })

      return card
    },
    [drawnCards, appendDrawnCard]
  )
}
