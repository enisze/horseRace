import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import CardImage from './CardImage'

type BackCardProps = {
  onClick?: () => void
}

const BackCard: FunctionComponent<BackCardProps> = ({ onClick }) => {
  return (
    <View onTouchStart={onClick}>
      <CardImage source={require('../../assets/cards/extra/back.png')} />
    </View>
  )
}

export default BackCard
