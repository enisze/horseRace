import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import NativeAd from './libs/src/ads/NativeAd'
import { GOOGLE_ADMOB_STARTVIEW_BANNER_ID } from './libs/src/env.config'
import { GameContextProvider } from './libs/src/helpers/GameContext'
import MainProvider from './libs/src/helpers/MainProvider'
import { MainView } from './libs/src/layouts/MainView'
import { StartView } from './libs/src/StartView'

export default function App() {
  return (
    <GameContextProvider>
      <MainProvider>
        <StartView />
        <MainView />

        <View style={tw`flex items-center `}>
          <NativeAd id={GOOGLE_ADMOB_STARTVIEW_BANNER_ID} />
        </View>
      </MainProvider>
    </GameContextProvider>
  )
}
