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
import { useGetRandomRankSymbol } from '../hooks/useGetRandomRankSymbol'
import { RandomCard } from '../cards/RandomCard'

export const MainView: FunctionComponent<{}> = () => {
  const { levelAmount, increment } = useGameContext()

  // if (!levelAmount) return null

  return (
    <View style={tw`flex p-20`}>
      <MainCardSet />
      <SideCardSet />
      <View style={tw`flex justify-center items-center`}>
        <RandomCard invoke={'increment'} />
      </View>
    </View>
  )
}
