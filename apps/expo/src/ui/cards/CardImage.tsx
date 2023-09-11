import { FunctionComponent } from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'

import { useGetCardWidthAndHeight } from '~/hooks/useGetCardWidthAndHeight'

const CardImage: FunctionComponent<{ source: ImageSourcePropType }> = ({
  source,
}) => {
  const cardStyles = useGetCardWidthAndHeight()
  return (
    <View style={{ flexGrow: 1 }}>
      <Image source={source} style={cardStyles} />
    </View>
  )
}

export default CardImage
