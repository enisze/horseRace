import React from 'react'
import { View } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { GameContextProvider } from './libs/src/helpers/GameContext'
import MainProvider from './libs/src/helpers/MainProvider'
import { SessionContextProvider } from './libs/src/helpers/SessionContext'
import SettingsHeader from './libs/src/layout/SettingsHeader'
import { MainView } from './libs/src/layouts/MainView'
import { StartView } from './libs/src/StartView'

const theme = {
  Button: {
    buttonStyle: {
      height: 48,
    },
  },
  Icon: {
    size: 32,
  },
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GameContextProvider>
        <SessionContextProvider>
          <SafeAreaProvider>
            <MainProvider>
              <SettingsHeader />

              <View style={tw`flex flex-col justify-center`}>
                <StartView />
                <MainView />
              </View>
            </MainProvider>
          </SafeAreaProvider>
        </SessionContextProvider>
      </GameContextProvider>
    </ThemeProvider>
  )
}
