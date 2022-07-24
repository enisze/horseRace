import AsyncStorage from '@react-native-async-storage/async-storage'
import { min } from 'lodash'
import React, {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { RankSymbol } from '../../types/RankSymbol.type'
import { Symbol } from '../../types/Symbol.type'
import { GAMEDATA_STORAGE_KEY } from '../constants'

type GameData = {
  CAmount: number
  DAmount: number
  HAmount: number
  SAmount: number
  drawnCards: RankSymbol[]
  levelAmount: number
}

const useGameContextState = () => {
  const [CAmount, setCAmount] = useState<number>(0)
  const [DAmount, setDAmount] = useState<number>(0)
  const [HAmount, setHAmount] = useState<number>(0)
  const [SAmount, setSAmount] = useState<number>(0)

  const [winner, setWinner] = useState<Symbol>()

  const [drawnCards, setDrawnCards] = useState<RankSymbol[]>([])

  const [levelAmount, setLevelAmount] = useState<number>(0)

  const setLevelAmountConditionally = (levelAmount: number) => {
    if (levelAmount < 11) {
      setLevelAmount(levelAmount)
    }
  }

  const currentLevel = useMemo(() => {
    return min([CAmount, DAmount, HAmount, SAmount]) ?? 0
  }, [CAmount, DAmount, HAmount, SAmount])

  const incrementFnc = (value: number) =>
    value >= 0 && value < levelAmount - 1 ? value + 1 : 0

  const increment = (symbol: Symbol) => {
    switch (symbol) {
      case 'C':
        setCAmount(incrementFnc)
        if (CAmount === levelAmount - 1) setWinner('C')
        return
      case 'D':
        setDAmount(incrementFnc)
        if (DAmount === levelAmount - 1) setWinner('D')
        return
      case 'H':
        setHAmount(incrementFnc)
        if (HAmount === levelAmount - 1) setWinner('H')
        return
      case 'S':
        setSAmount(incrementFnc)
        if (SAmount === levelAmount - 1) setWinner('S')
        return
    }
  }

  const decrementFnc = (value: number) =>
    value > 0 && value <= levelAmount - 1 ? value - 1 : 0

  const decrement = (symbol: Symbol) => {
    switch (symbol) {
      case 'C':
        setCAmount(decrementFnc)
        return
      case 'D':
        setDAmount(decrementFnc)
        return
      case 'H':
        setHAmount(decrementFnc)
        return
      case 'S':
        setSAmount(decrementFnc)
        return
    }
  }

  const getCurrentLevelBySymbol = (symbol: Symbol) => {
    switch (symbol) {
      case 'C':
        return CAmount
      case 'D':
        return DAmount
      case 'H':
        return HAmount
      case 'S':
        return SAmount
    }
  }

  const storeData = async () => {
    try {
      const gameData: GameData = {
        CAmount,
        DAmount,
        HAmount,
        SAmount,
        drawnCards,
        levelAmount,
      }
      console.log('data2', gameData)
      await AsyncStorage.setItem(GAMEDATA_STORAGE_KEY, JSON.stringify(gameData))
    } catch (e) {
      // saving error
    }
  }

  const getLastGamePlayedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(GAMEDATA_STORAGE_KEY)
      return Boolean(jsonValue)
    } catch (error: any) {}
  }
  useEffect(() => {
    const lastGame = getLastGamePlayedData()
    storeData()
  }, [CAmount, DAmount, HAmount, SAmount, drawnCards, levelAmount])

  const appendDrawnCard = (rankSymbol: RankSymbol) => {
    setDrawnCards((cards) => [...cards, rankSymbol])
  }

  const reset = () => {
    setCAmount(0)
    setDAmount(0)
    setSAmount(0)
    setHAmount(0)
    setDrawnCards([])
    setWinner(undefined)
  }

  return {
    winner,
    levelAmount,
    drawnCards,
    appendDrawnCard,
    reset,
    setLevelAmount: setLevelAmountConditionally,
    getCurrentLevelBySymbol,
    currentLevel,
    increment,
    decrement,
  }
}

type IGameContext = ReturnType<typeof useGameContextState>

const GameContext = createContext({} as IGameContext)

export const GameContextProvider: FunctionComponent<{
  gameData?: GameData
}> = ({ children, gameData }) => {
  const value = useGameContextState()

  if (gameData) {
    setGameState(gameData)
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGameContext = () => {
  return useContext(GameContext)
}

const setGameState = (gameData: GameData) => {
  console.log('data', gameData)
}
