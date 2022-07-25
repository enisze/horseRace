import { filter, last } from 'lodash'
import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { LevelAction } from '../../types/LevelAction.type'
import { RankSymbol } from '../../types/RankSymbol.type'
import { useGameContext } from '../helpers/GameContext'
import { getSymbolFromRankSymbol } from '../helpers/getSymbolFromRankSymbol'
import { useGetRandomRankSymbol } from '../hooks/useGetRandomRankSymbol'
import BackCard from './BackCard'
import Card from './Card'

type RandomCardSetProps = {}

export const RandomCardSet: FunctionComponent<RandomCardSetProps> = () => {
  const getRandomRankSymbol = useGetRandomRankSymbol()

  const { increment } = useGameContext()

  const lastCard = useGetLastRankSymbol('increment')

  const [randomSymbol, setRandomSymbol] = useState<RankSymbol | undefined>(
    lastCard
  )

  return (
    <View style={tw`flex flex-row`}>
      <BackCard
        onClick={() => {
          const rankSymbol = getRandomRankSymbol('increment')
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
  const { drawnCards } = useGameContext()

  const filteredCardsByAction = filter(
    drawnCards,
    (card) => card.action === action
  )
  const lastCard = last(filteredCardsByAction)?.rankSymbol

  return lastCard
}
