import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { GAMEDATA_STORAGE_KEY } from './libs/src/constants'
import { GameContextProvider } from './libs/src/helpers/GameContext'
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
      <StartView />
      <MainView />
    </GameContextProvider>
  )
}
