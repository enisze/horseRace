import React, { FunctionComponent, useEffect, useMemo } from 'react'
import { View } from 'react-native'
import { useGameContext } from '../helpers/GameContext'
import { getSymbolFromRankSymbol } from '../helpers/getSymbolFromRankSymbol'
import { useGetRandomRankSymbol } from '../hooks/useGetRandomRankSymbol'
import BackCard from './BackCard'
import Card from './Card'

type RandomCardProps = {
  level?: number
}

export const RandomCardAutomated: FunctionComponent<RandomCardProps> = ({
  level,
}) => {
  const getRandomRankSymbol = useGetRandomRankSymbol()

  const { decrement, currentLevel } = useGameContext()

  const randomSymbol = useMemo(() => {
    if (level === currentLevel) {
      return getRandomRankSymbol()
    }
  }, [level])

  useEffect(() => {
    if (randomSymbol) {
      const symbol = getSymbolFromRankSymbol(randomSymbol)

      decrement(symbol)
    }
  }, [randomSymbol])

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
