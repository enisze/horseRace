import { last } from 'lodash'
import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { RankSymbol } from '../../types/RankSymbol.type'
import { useGameContext } from '../helpers/GameContext'
import { getSymbolFromRankSymbol } from '../helpers/getSymbolFromRankSymbol'
import { useGetRandomRankSymbol } from '../hooks/useGetRandomRankSymbol'
import BackCard from './BackCard'
import Card from './Card'

type RandomCardSetProps = {
  invoke: 'increment' | 'decrement'
}

export const RandomCardSet: FunctionComponent<RandomCardSetProps> = ({
  invoke,
}) => {
  const getRandomRankSymbol = useGetRandomRankSymbol()

  const { increment, decrement, drawnCards } = useGameContext()

  const [randomSymbol, setRandomSymbol] = useState<RankSymbol | undefined>(
    last(drawnCards)
  )

  return (
    <View style={tw`flex flex-row`}>
      <BackCard
        onClick={() => {
          const rankSymbol = getRandomRankSymbol()
          setRandomSymbol(rankSymbol)
          const symbol = getSymbolFromRankSymbol(rankSymbol)

          invoke === 'increment' ? increment(symbol) : decrement(symbol)
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
