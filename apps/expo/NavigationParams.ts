/**
 * @see {@link https://reactnavigation.org/docs/typescript/#organizing-types}
 */

export type RootStackParamList = {
  StartView: undefined;
  MainView: undefined;
  StatisticsView: undefined;
  SessionView: undefined;
};

export type NavigationScreen = keyof RootStackParamList;

declare global {
  interface RootParamList extends RootStackParamList {}
}
