import React, { FunctionComponent } from 'react'

import { View, Text } from 'react-native'
import Card from '../cards/Card'
import tw from 'twrnc'
import { gapStyles } from '../../styles/gapStyles.styles'
import { RankSymbol } from '../../types/RankSymbol.type'
import { map } from 'lodash'

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
          <View style={styles.child} key={idx}>
            <Card rankSymbol={key} />
          </View>
        )
      })}
    </View>
  )
}
