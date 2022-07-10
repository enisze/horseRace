import React, {
  Children,
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from 'react'
import { RankSymbol } from '../../types/RankSymbol.type'
import { Symbol } from '../../types/Symbol.type'

const useGameContextState = () => {
  const [CAmount, setCAmount] = useState<number>(0)
  const [DAmount, setDAmount] = useState<number>(0)
  const [HAmount, setHAmount] = useState<number>(0)
  const [SAmount, setSAmount] = useState<number>(0)

  const [drawnCards, setDrawnCards] = useState<RankSymbol[]>([])

  const [levelAmount, setLevelAmount] = useState<number>(10)
  const [currentLevel, setCurrentLevel] = useState(0)

  const setLevelAmountConditionally = (levelAmount: number) => {
    if (levelAmount < 11) {
      setLevelAmount(levelAmount)
    }
  }

  const increment = (symbol: Symbol) => {
    switch (symbol) {
      case 'C':
        setCAmount((value) => value + 1)
        return
      case 'D':
        setDAmount((value) => value + 1)
        return
      case 'H':
        setHAmount((value) => value + 1)
        return
      case 'S':
        setSAmount((value) => value + 1)
        return
    }
  }

  const decrement = (symbol: Symbol) => {
    switch (symbol) {
      case 'C':
        setCAmount((value) => value - 1)
        return
      case 'D':
        setDAmount((value) => value - 1)
        return
      case 'H':
        setHAmount((value) => value - 1)
        return
      case 'S':
        setSAmount((value) => value - 1)
        return
    }
  }

  const getCurrentLevelAmount = (symbol: Symbol) => {
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

  const appendDrawnCard = (rankSymbol: RankSymbol) => {
    setDrawnCards((cards) => [...cards, rankSymbol])
  }

  return {
    levelAmount,
    currentLevel,
    drawnCards,
    appendDrawnCard,
    setLevelAmount: setLevelAmountConditionally,
    setCurrentLevel,
    getCurrentLevelAmount,
    increment,
    decrement,
  }
}

type IGameContext = ReturnType<typeof useGameContextState>

const GameContext = createContext({} as IGameContext)

export const GameContextProvider: FunctionComponent = ({ children }) => {
  const value = useGameContextState()
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGameContext = () => {
  return useContext(GameContext)
}
