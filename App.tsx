import React from 'react'
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
      </MainProvider>
    </GameContextProvider>
  )
}
