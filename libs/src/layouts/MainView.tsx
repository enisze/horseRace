import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { RandomCard } from '../cards/RandomCard'
import { MainCardSet } from '../cardSets/MainCardSet'
import { SideCardSet } from '../cardSets/SideCardSet'
import { useGameContext } from '../helpers/GameContext'

export const MainView: FunctionComponent<{}> = () => {
  const { levelAmount, increment } = useGameContext()

  // if (!levelAmount) return null

  return (
    <View style={tw`flex p-20`}>
      <View style={tw`flex flex-row`}>
        <SideCardSet />
        <MainCardSet />
      </View>
      <View style={tw`flex justify-center items-center`}>
        <RandomCard invoke={'increment'} />
      </View>
    </View>
  )
}
