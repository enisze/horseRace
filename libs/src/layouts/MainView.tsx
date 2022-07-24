import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { RandomCard } from '../cards/RandomCard'
import { MainCardSet } from '../cardSets/MainCardSet'
import { SideCardSet } from '../cardSets/SideCardSet'
import { useGameContext } from '../helpers/GameContext'
import { WinnerModal } from './WinnerModal'

export const MainView: FunctionComponent<{}> = () => {
  const { levelAmount } = useGameContext()

  if (!levelAmount) return null

  return (
    <View style={tw`flex p-2 pt-10 bg-blue-100 h-full w-full`}>
      <View style={tw`flex flex-row`}>
        <SideCardSet />
        <MainCardSet />
      </View>
      <View style={tw`flex justify-center items-center`}>
        <RandomCard invoke={'increment'} />
      </View>
      <WinnerModal />
    </View>
  )
}
