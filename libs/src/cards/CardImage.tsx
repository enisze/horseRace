import React, { FunctionComponent } from 'react'
import { Dimensions, View, Image, ImageSourcePropType } from 'react-native'

import { getWidthAndHeight } from '../helpers/getWidthAndHeight'

const CardImage: FunctionComponent<{ source: ImageSourcePropType }> = ({
  source,
}) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Image source={source} style={getWidthAndHeight()} />
    </View>
  )
}

export default CardImage
