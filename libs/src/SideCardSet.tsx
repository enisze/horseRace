import React, { FunctionComponent } from 'react'

import { View } from 'react-native'
import tw from 'twrnc'
import BackCard from './BackCard'
import { useGameContext } from './GameContext'

export const SideCardSet: FunctionComponent = () => {
  const { levelAmount } = useGameContext()

  return (
    <View style={tw`flex flex-col space-y-4`}>
      {[...Array(levelAmount)].map((e, i) => (
        <BackCard />
      ))}
    </View>
  )
}
