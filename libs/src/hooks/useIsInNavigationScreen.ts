import { isUndefined } from 'lodash'
import { TestParams } from '../../../NavigationParams'
import { useCurrentScreenContext } from '../helpers/CurrentScreenContext'

export const useIsInNavigationScreen = (screenName: TestParams): boolean => {
  const { currentScreen } = useCurrentScreenContext()

  return !isUndefined(currentScreen) && currentScreen === screenName
}
