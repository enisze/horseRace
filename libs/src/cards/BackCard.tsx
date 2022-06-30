import React, { FunctionComponent } from 'react'
import { Image } from 'react-native'
import tw from 'twrnc'
import CardImage from './CardImage'

const BackCard: FunctionComponent = () => {
  return <CardImage source={require('../../assets/cards/extra/back.png')} />
}

export default BackCard
