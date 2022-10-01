import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback } from 'react'
import { GAMEDATA_STORAGE_KEY } from '../constants'
import { useGameContext } from '../helpers/GameContext'

export const useGetLastGamePlayedData = () => {
  const { loadGameState } = useGameContext()

  return useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(GAMEDATA_STORAGE_KEY)
      const gameData = jsonValue != null ? JSON.parse(jsonValue) : null
      loadGameState(gameData)
    } catch (error: any) {}
  }, [loadGameState])
}
