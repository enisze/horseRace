import React, { FunctionComponent } from 'react'
import { Dimensions, Image, View } from 'react-native'
import { RankSymbol } from '../../types/RankSymbol.type'
import { getImage } from '../../imageList/imageList'
import CardImage from './CardImage'

interface CardProps {
  rankSymbol: RankSymbol
}

const Card: FunctionComponent<CardProps> = ({ rankSymbol }) => {
  const win = Dimensions.get('window')
  const width = win.width / 5 - 100

  return (
    <>
      <CardImage source={getImage(rankSymbol)} />
      <View style={{ flexGrow: 1 }}>
        <Image
          source={getImage(rankSymbol)}
          style={{ width, height: width * 1.55 }}
        />
      </View>
    </>
  )
}

export default Card
