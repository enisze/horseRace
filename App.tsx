import React from 'react'
import { GameContextProvider } from './libs/src/helpers/GameContext'
import SettingsHeader from './libs/src/layout/SettingsHeader'
import { MainView } from './libs/src/layouts/MainView'
import { StartView } from './libs/src/StartView'

export default function App() {
  return (
    <GameContextProvider>
      <SettingsHeader />
      <StartView />
      <MainView />
    </GameContextProvider>
  )
}
