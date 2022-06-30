import React, { FunctionComponent } from 'react'
import { Dimensions, View, Image, ImageSourcePropType } from 'react-native'

const CardImage: FunctionComponent<{ source: ImageSourcePropType }> = ({
  source,
}) => {
  const win = Dimensions.get('window')
  const width = win.width / 5

  return (
    <View style={{ flexGrow: 1 }}>
      <Image source={source} style={{ width, height: width * 1.55 }} />
    </View>
  )
}

export default CardImage
