import React, { FunctionComponent } from 'react'

import { map } from 'lodash'
import { View } from 'react-native'
import tw from 'twrnc'
import { gapStyles } from '../../styles/gapStyles.styles'
import { RankSymbol } from '../../types/RankSymbol.type'
import Card from '../cards/Card'
import { SIDE_CARD_SET_GAP } from '../constants'
import { useGameContext } from '../helpers/GameContext'
import { getCardWidthAndHeight } from '../helpers/geCardWidthAndHeight'
import { getSymbolFromRankSymbol } from '../helpers/getSymbolFromRankSymbol'

export const MainCardSet: FunctionComponent = () => {
  const styles = gapStyles(12, 'row')

  const keys: RankSymbol[] = ['AC', 'AD', 'AS', 'AH']

  return (
    <View
      style={{
        ...tw`flex flex-row items-end`,
        ...styles.container,
        ...{ marginBottom: -SIDE_CARD_SET_GAP / 2 },
      }}
    >
      {map(keys, (key, idx) => {
        return (
          <View style={styles.child} key={idx}>
            <CardWithCurrentPosition rankSymbol={key} />
          </View>
        )
      })}
    </View>
  )
}

const CardWithCurrentPosition: FunctionComponent<{
  rankSymbol: RankSymbol
}> = ({ rankSymbol }) => {
  const { height } = getCardWidthAndHeight()
  const { getCurrentLevelAmount } = useGameContext()

  const symbol = getSymbolFromRankSymbol(rankSymbol)

  const offset = 1
  const amount = getCurrentLevelAmount(symbol) + offset

  const newHeight = (height + SIDE_CARD_SET_GAP) * amount

  return (
    <View style={{ height: newHeight }} key={rankSymbol}>
      <Card rankSymbol={rankSymbol} />
    </View>
  )
}
