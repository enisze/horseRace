/**
 * @see {@link https://reactnavigation.org/docs/typescript/#organizing-types}
 */

export type RootStackParamList = {
  StartView: undefined
  MainView: undefined
}

export type TestParams = keyof RootStackParamList

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
