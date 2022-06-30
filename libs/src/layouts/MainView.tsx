import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { MainCardSet } from '../cardSets/MainCardSet'
import { SideCardSet } from '../cardSets/SideCardSet'
import tw from 'twrnc'
import { useGameContext } from '../helpers/GameContext'

export const MainView: FunctionComponent<{}> = () => {
  const { levelAmount } = useGameContext()

  if (!levelAmount) return null

  return (
    <View style={tw`flex p-20`}>
      <MainCardSet />
      <SideCardSet />
    </View>
  )
}
