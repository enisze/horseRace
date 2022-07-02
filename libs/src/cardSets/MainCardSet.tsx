import React, { FunctionComponent } from 'react'

import { View, Text } from 'react-native'
import Card from '../cards/Card'
import tw from 'twrnc'
import { gapStyles } from '../../styles/gapStyles.styles'
import { RankSymbol } from '../../types/RankSymbol.type'
import { map } from 'lodash'
import { useGameContext } from '../helpers/GameContext'
import { getWidthAndHeight } from '../helpers/getWidthAndHeight'
import { getSymbolFromRankSymbol } from '../helpers/getSymbolFromRankSymbol'

export const MainCardSet: FunctionComponent = () => {
  const styles = gapStyles(4, 'row')

  const keys: RankSymbol[] = ['AC', 'AD', 'AS', 'AH']

  return (
    <View
      style={{
        ...tw`flex flex-row justify-center items-end`,
        ...styles.container,
      }}
    >
      {map(keys, (key, idx) => {
        return (
          <View style={{ ...styles.child }} key={idx}>
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
  const { height } = getWidthAndHeight()
  const { getCurrentLevelAmount } = useGameContext()

  const symbol = getSymbolFromRankSymbol(rankSymbol)

  const offset = 1
  const newHeight = height * (getCurrentLevelAmount(symbol) + offset)

  return (
    <View style={{ height: newHeight }} key={rankSymbol}>
      <Card rankSymbol={rankSymbol} />
    </View>
  )
}
