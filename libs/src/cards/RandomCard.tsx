import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import { RankSymbol } from '../../types/RankSymbol.type'
import { useGameContext } from '../helpers/GameContext'
import { getSymbolFromRankSymbol } from '../helpers/getSymbolFromRankSymbol'
import { useGetRandomRankSymbol } from '../hooks/useGetRandomRankSymbol'
import BackCard from './BackCard'
import Card from './Card'

type RandomCardProps = {
  invoke: 'increment' | 'decrement'
}

export const RandomCard: FunctionComponent<RandomCardProps> = ({ invoke }) => {
  const getRandomRankSymbol = useGetRandomRankSymbol()

  const { increment, decrement } = useGameContext()

  const [randomSymbol, setRandomSymbol] = useState<RankSymbol>()

  return (
    <View>
      {randomSymbol ? (
        <View
          onTouchStart={() => {
            setRandomSymbol(undefined)
          }}
        >
          <Card rankSymbol={randomSymbol} />
        </View>
      ) : (
        <BackCard
          onClick={() => {
            const rankSymbol = getRandomRankSymbol()
            setRandomSymbol(rankSymbol)
            const symbol = getSymbolFromRankSymbol(rankSymbol)

            invoke === 'increment' ? increment(symbol) : decrement(symbol)
          }}
        />
      )}
    </View>
  )
}
