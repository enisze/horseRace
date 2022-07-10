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

  const incrementFnc = (value: number) => (value >= 0 ? value + 1 : 0)

  const increment = (symbol: Symbol) => {
    switch (symbol) {
      case 'C':
        setCAmount(incrementFnc)
        return
      case 'D':
        setDAmount(incrementFnc)
        return
      case 'H':
        setHAmount(incrementFnc)
        return
      case 'S':
        setSAmount(incrementFnc)
        return
    }
  }

  const decrementFnc = (value: number) => (value > 0 ? value - 1 : 0)

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
