import { createTheme, ThemeProvider } from '@rneui/themed'
import React from 'react'
import { GameContextProvider } from './libs/src/helpers/GameContext'
import { MainView } from './libs/src/layouts/MainView'
import { StartView } from './libs/src/StartView'

const theme = createTheme({
  lightColors: {},
  darkColors: {},
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GameContextProvider>
        <StartView />
        <MainView />
      </GameContextProvider>
    </ThemeProvider>
  )
}
