import { FunctionComponent } from 'react'

import { getImage } from '~/dataLists/imageList'
import { RankSymbol } from '~/types/RankSymbol.type'
import CardImage from './CardImage'

interface CardProps {
  rankSymbol: RankSymbol
}

const Card: FunctionComponent<CardProps> = ({ rankSymbol }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return <CardImage source={getImage(rankSymbol)} />
}

export default Card
