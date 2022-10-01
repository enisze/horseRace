import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
import NativeAd from '../ads/NativeAd'
import { RandomCardSet } from '../cards/RandomCardSet'
import { MainCardSet } from '../cardSets/MainCardSet'
import { SideCardSet } from '../cardSets/SideCardSet'
import { GOOGLE_ADMOB_MAINVIEW_BANNER_ID } from '../env.config'
import { useGameContext } from '../helpers/GameContext'
import { useSessionContext } from '../helpers/SessionContext'
import { WinnerModal } from './WinnerModal'

export const MainView: FunctionComponent<{}> = () => {
  const { gameState } = useGameContext()
  const { players, gameId } = useSessionContext()

  if (gameState !== 'loaded' && gameState !== 'playing') return null

  return (
    <View style={tw`flex p-2 pt-10 bg-blue-100 h-full w-full`}>
      <View>
        {gameId && <Text>{gameId}</Text>}
        {players && <Text>{players}</Text>}
      </View>
      <View style={tw`flex flex-row`}>
        <SideCardSet />
        <MainCardSet />
      </View>

      <View style={tw`flex justify-center items-center pb-2`}>
        <RandomCardSet />
      </View>
      <WinnerModal />
      <View style={tw`flex items-center`}>
        <NativeAd id={GOOGLE_ADMOB_MAINVIEW_BANNER_ID} />
      </View>
    </View>
  )
}
