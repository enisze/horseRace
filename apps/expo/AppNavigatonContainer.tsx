import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { PropsWithChildren } from 'react'
import { useCurrentScreenContext } from './libs/src/contexts/CurrentScreenContext'

export const AppNavigatonContainer: React.FunctionComponent<
  PropsWithChildren<{}>
> = ({ children }) => {
  const navigationRef = useNavigationContainerRef()

  const { setActiveScreen } = useCurrentScreenContext()

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setActiveScreen(navigationRef.getCurrentRoute()?.name)
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name
        setActiveScreen(currentRouteName)
      }}
    >
      {children}
    </NavigationContainer>
  )
}
