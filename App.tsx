import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigation } from './AppNavigation'
import { GameContextProvider } from './libs/src/helpers/GameContext'
import MainProvider from './libs/src/helpers/MainProvider'

import { I18nextProvider } from 'react-i18next'
import { AppNavigatonContainer } from './AppNavigatonContainer'
import SettingsHeader from './libs/src/header/SettingsHeader'
import { CurrentScreenContextProvider } from './libs/src/helpers/CurrentScreenContext'

import i18n from './libs/src/i18n'

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
        <I18nextProvider i18n={i18n}>
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
        </I18nextProvider>
      </GameContextProvider>
    </ThemeProvider>
  )
}
