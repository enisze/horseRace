/**
 * @see {@link https://reactnavigation.org/docs/typescript/#organizing-types}
 */

export type RootStackParamList = {
  StartView: undefined
  MainView: undefined
  StatisticsView: undefined
}

export type NavigationScreen = keyof RootStackParamList

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
