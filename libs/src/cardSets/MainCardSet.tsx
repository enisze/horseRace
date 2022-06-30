import React, { FunctionComponent } from 'react'

import { View } from 'react-native'
import Card from '../cards/Card'
import tw from 'twrnc'
import { gapStyles } from '../../styles/gapStyles.styles'

export const MainCardSet: FunctionComponent = () => {
  const styles = gapStyles(4, 'column')

  return (
    <View
      style={{
        ...tw`flex flex-row justify-center items-end`,
        ...styles.container,
      }}
    >
      <View style={styles.child}>
        <Card rankSymbol={'AC'} />
      </View>
      <View style={styles.child}>
        <Card rankSymbol={'AD'} />
      </View>
      <View style={styles.child}>
        <Card rankSymbol={'AH'} />
      </View>
      <View style={styles.child}>
        <Card rankSymbol={'AS'} />
      </View>
    </View>
  )
}
