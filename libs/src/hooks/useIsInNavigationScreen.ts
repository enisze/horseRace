import { isUndefined } from 'lodash'
import { NavigationScreen } from '../../../NavigationParams'
import { useCurrentScreenContext } from '../contexts/CurrentScreenContext'

export const useIsInNavigationScreen = (
  screenName: NavigationScreen
): boolean => {
  const { currentScreen } = useCurrentScreenContext()

  return !isUndefined(currentScreen) && currentScreen === screenName
}
