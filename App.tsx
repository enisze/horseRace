import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { GAMEDATA_STORAGE_KEY } from './libs/src/constants'
import { GameContextProvider } from './libs/src/helpers/GameContext'
import MainProvider from './libs/src/helpers/MainProvider'
import SettingsHeader from './libs/src/layout/SettingsHeader'
import { MainView } from './libs/src/layouts/MainView'
import { StartView } from './libs/src/StartView'

export default function App() {
  const [gameData, setGameData] = useState()

  const getLastGamePlayedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(GAMEDATA_STORAGE_KEY)
      console.log('data', jsonValue)
      setGameData(jsonValue != null ? JSON.parse(jsonValue) : null)
    } catch (error: any) {}
  }

  useEffect(() => {
    getLastGamePlayedData()
  }, [])

  return (
    <GameContextProvider gameData={gameData}>
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
