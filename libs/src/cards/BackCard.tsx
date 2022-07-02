import React, { FunctionComponent } from 'react'
import { Image, View } from 'react-native'
import tw from 'twrnc'
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
