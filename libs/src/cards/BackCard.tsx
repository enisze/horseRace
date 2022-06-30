import React, { FunctionComponent } from 'react'
import { Image } from 'react-native'
import tw from 'twrnc'

const BackCard: FunctionComponent = () => {
  return (
    <Image
      source={require('../assets/cards/extra/back.png')}
      style={tw`h-23 w-15 `}
    />
  )
}

export default BackCard
