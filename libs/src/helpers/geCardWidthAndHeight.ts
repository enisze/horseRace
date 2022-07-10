import { Dimensions } from 'react-native'
import { useGameContext } from './GameContext'

export const getCardWidthAndHeight = () => {
  const { levelAmount } = useGameContext()

  const { height } = Dimensions.get('window')

  let maxCardHeight = 0

  if (levelAmount) {
    maxCardHeight = height / levelAmount
  }

  const cardHeight = maxCardHeight

  const cardWidth = cardHeight / 1.55

  return { width: cardWidth, height: cardHeight }
}
