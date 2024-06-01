import type { FunctionComponent } from 'react'

import { getImage } from '@/src/dataLists/imageList'
import type { RankSymbol } from '@/src/types/RankSymbol.type'
import CardImage from './CardImage'

interface CardProps {
	rankSymbol: RankSymbol
}

const Card: FunctionComponent<CardProps> = ({ rankSymbol }) => {
	return <CardImage source={getImage(rankSymbol)} />
}

export default Card
