import React, { FunctionComponent, useEffect, useState } from 'react'
import { View } from 'react-native'
import { RankSymbol } from '../../types/RankSymbol.type'
import { useGameContext } from '../helpers/GameContext'
import { getSymbolFromRankSymbol } from '../helpers/getSymbolFromRankSymbol'
import { useGetRandomRankSymbol } from '../hooks/useGetRandomRankSymbol'
import BackCard from './BackCard'
import Card from './Card'

type RandomCardAutomatedProps = {
  level: number
}

export const RandomCardAutomated: FunctionComponent<
  RandomCardAutomatedProps
> = ({ level }) => {
  const getRandomRankSymbol = useGetRandomRankSymbol()

  const { decrement, currentLevel, drawnCards } = useGameContext()

  const [randomSymbol, setRandomSymbol] = useState<RankSymbol>()
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
  }, [currentLevel, level, getRandomRankSymbol])

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
