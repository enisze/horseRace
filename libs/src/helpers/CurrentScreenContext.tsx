import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from 'react'

const useCurrentScreenContextState = () => {
  const [currentScreen, setActiveScreen] = useState<string>()

  return { currentScreen, setActiveScreen }
}

type ICurrentScreenContext = ReturnType<typeof useCurrentScreenContextState>

const CurrentScreenContext = createContext({} as ICurrentScreenContext)

export const CurrentScreenContextProvider: FunctionComponent<{}> = ({
  children,
}) => {
  const value = useCurrentScreenContextState()

  return (
    <CurrentScreenContext.Provider value={value}>
      {children}
    </CurrentScreenContext.Provider>
  )
}

export const useCurrentScreenContext = () => {
  return useContext(CurrentScreenContext)
}
