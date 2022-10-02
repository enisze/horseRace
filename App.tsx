import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigation } from './AppNavigation'
import { GameContextProvider } from './libs/src/helpers/GameContext'
import MainProvider from './libs/src/helpers/MainProvider'

import { AppNavigatonContainer } from './AppNavigatonContainer'
import SettingsHeader from './libs/src/header/SettingsHeader'
import { CurrentScreenContextProvider } from './libs/src/helpers/CurrentScreenContext'

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
        <SafeAreaProvider>
          <CurrentScreenContextProvider>
            <MainProvider>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <AppNavigatonContainer>
                  <SettingsHeader />
                  <AppNavigation />
                </AppNavigatonContainer>
              </GestureHandlerRootView>
            </MainProvider>
          </CurrentScreenContextProvider>
        </SafeAreaProvider>
      </GameContextProvider>
    </ThemeProvider>
  )
}
