import React, { FunctionComponent } from 'react'

import { View } from 'react-native'
import tw from 'twrnc'
import { gapStyles } from '../../styles/gapStyles.styles'
import { RandomCard } from '../cards/RandomCard'
import { SIDE_CARD_SET_GAP } from '../constants'
import { useGameContext } from '../helpers/GameContext'

export const SideCardSet: FunctionComponent = () => {
  const { levelAmount } = useGameContext()

  const styles = gapStyles(SIDE_CARD_SET_GAP, 'column')

  return (
    <View style={{ ...tw`flex flex-col`, ...styles.container }}>
      {[...Array(levelAmount)].map((e, i) => (
        <View style={styles.child} key={i}>
          <RandomCard invoke="decrement" />
        </View>
      ))}
    </View>
  )
}
