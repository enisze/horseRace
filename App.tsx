import React from 'react'
import NativeAd from './libs/src/ads/NativeAd'
import { GameContextProvider } from './libs/src/helpers/GameContext'
import MainProvider2 from './libs/src/helpers/MainProvider2'
import { MainView } from './libs/src/layouts/MainView'
import { StartView } from './libs/src/StartView'

export default function App() {
  return (
    <GameContextProvider>
      <MainProvider2>
        <StartView />
        <MainView />

        <NativeAd />
      </MainProvider2>
    </GameContextProvider>
  )
}
