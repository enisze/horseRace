import React, { FunctionComponent, useCallback, useState } from 'react'
import { View, Text } from 'react-native'
import { MainCardSet } from '../cardSets/MainCardSet'
import { SideCardSet } from '../cardSets/SideCardSet'
import tw from 'twrnc'
import { useGameContext } from '../helpers/GameContext'
import BackCard from '../cards/BackCard'
import { rankSymbolList } from '../../dataLists/rankSymbolList'
import { RankSymbol } from '../../types/RankSymbol.type'
import { getSymbolFromRankSymbol } from '../helpers/getSymbolFromRankSymbol'
import Card from '../cards/Card'

export const MainView: FunctionComponent<{}> = () => {
  const { levelAmount, increment } = useGameContext()

  // if (!levelAmount) return null

  const getRandomRankSymbol = useGetRandomRankSymbol()

  const [test, setTest] = useState<RankSymbol>()

  return (
    <View style={tw`flex p-20`}>
      <MainCardSet />
      <SideCardSet />
      <View style={tw`flex justify-center items-center`}>
        {test ? (
          <Card rankSymbol={test} />
        ) : (
          <BackCard
            onClick={() => {
              const rankSymbol = getRandomRankSymbol()

              setTest(rankSymbol)

              const symbol = getSymbolFromRankSymbol(rankSymbol)

              increment(symbol)
            }}
          />
        )}
      </View>
    </View>
  )
}

const useGetRandomRankSymbol = () => {
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
