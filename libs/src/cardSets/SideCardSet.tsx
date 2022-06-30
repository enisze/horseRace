import React, { FunctionComponent } from 'react'

import { View } from 'react-native'
import tw from 'twrnc'
import { gapStyles } from '../../styles/gapStyles.styles'
import BackCard from '../cards/BackCard'
import { useGameContext } from '../helpers/GameContext'

export const SideCardSet: FunctionComponent = () => {
  const { levelAmount } = useGameContext()

  const styles = gapStyles(4, 'column')

  return (
    <View style={{ ...tw`flex flex-col`, ...styles.container }}>
      {[...Array(levelAmount)].map((e, i) => (
        <View style={styles.child} key={i}>
          <BackCard />
        </View>
      ))}
    </View>
  )
}
