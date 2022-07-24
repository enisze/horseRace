import React from 'react'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { GameContextProvider } from './libs/src/helpers/GameContext'
import MainProvider from './libs/src/helpers/MainProvider'
import SettingsHeader from './libs/src/layout/SettingsHeader'
import { MainView } from './libs/src/layouts/MainView'
import { StartView } from './libs/src/StartView'

export default function App() {
  return (
    <GameContextProvider>
      <SafeAreaProvider>
        <MainProvider>
          <SettingsHeader />

          <View style={tw`flex flex-col justify-center`}>
            <StartView />
            <MainView />
          </View>
        </MainProvider>
      </SafeAreaProvider>
    </GameContextProvider>
  )
}
