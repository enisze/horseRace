import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from 'react'

export type User = { id: string; name: string }

type SessionData = {
  players: User[]
  gameId: string
}

type GameState = 'off' | 'init' | 'loaded' | 'playing'

const useSessionContextState = () => {
  const [players, setPlayers] = useState<User[]>([])
  const [gameId, setGameId] = useState<string | null>(null)

  return { players, setPlayers, gameId, setGameId }
}

type ISessionContext = ReturnType<typeof useSessionContextState>

const SessionContext = createContext({} as ISessionContext)

export const SessionContextProvider: FunctionComponent<{}> = ({ children }) => {
  const value = useSessionContextState()

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  )
}

export const useSessionContext = () => {
  return useContext(SessionContext)
}
