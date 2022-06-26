import { FunctionComponent } from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import tw from 'twrnc'
import { RankSymbol } from '../types/RankSymbol.type'
import { getImage } from '../imageList/imageList'

interface CardProps {
  rankSymbol: RankSymbol
}

const Card: FunctionComponent<CardProps> = ({ rankSymbol }) => {
  return <Image source={getImage(rankSymbol)} style={tw`h-23 w-15 `} />
}

export default Card
