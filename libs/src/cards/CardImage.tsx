import React, { FunctionComponent } from 'react'
import { Dimensions, View, Image, ImageSourcePropType } from 'react-native'

import { getCardWidthAndHeight } from '../helpers/geCardWidthAndHeight'

const CardImage: FunctionComponent<{ source: ImageSourcePropType }> = ({
  source,
}) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Image source={source} style={getCardWidthAndHeight()} />
    </View>
  )
}

export default CardImage
