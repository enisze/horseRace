import React, {
  Children,
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from 'react'
import { Symbol } from '../types/Symbol.type'

const useGameContextState = () => {
  const [CAmount, setCAmount] = useState<number>(0)
  const [DAmount, setDAmount] = useState<number>(0)
  const [HAmount, setHAmount] = useState<number>(0)
  const [SAmount, setSAmount] = useState<number>(0)

  const [levelAmount, setLevelAmount] = useState<number>()
  const [currentLevel, setCurrentLevel] = useState(0)

  const increment = (symbol: Symbol) => {
    switch (symbol) {
      case 'C':
        setCAmount((value) => value++)
        return
      case 'D':
        setDAmount((value) => value++)
        return
      case 'H':
        setHAmount((value) => value++)
        return
      case 'S':
        setSAmount((value) => value++)
        return
    }
  }

  const decrement = (symbol: Symbol) => {
    switch (symbol) {
      case 'C':
        setCAmount((value) => value--)
        return
      case 'D':
        setDAmount((value) => value--)
        return
      case 'H':
        setHAmount((value) => value--)
        return
      case 'S':
        setSAmount((value) => value--)
        return
    }
  }

  return {
    CAmount,
    DAmount,
    HAmount,
    SAmount,
    levelAmount,
    currentLevel,
    setLevelAmount,
    setCurrentLevel,
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
