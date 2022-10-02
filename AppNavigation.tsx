import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'
import { MainView } from './libs/src/layouts/MainView'
import { SessionView } from './libs/src/layouts/SessionView'
import { StartView } from './libs/src/layouts/StartView'
import { StatisticsView } from './libs/src/layouts/StatisticsView'

const Stack = createStackNavigator()

export const AppNavigation: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Group>
        <Stack.Screen
          name="StartView"
          component={StartView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainView"
          component={MainView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StatisticsView"
          component={StatisticsView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SessionView"
          component={SessionView}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
