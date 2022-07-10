import { Dimensions } from 'react-native'
import { SIDE_CARD_SET_GAP } from '../constants'
import { useGameContext } from './GameContext'

export const getCardWidthAndHeight = () => {
  const { levelAmount } = useGameContext()

  const { height, width } = Dimensions.get('window')

  let maxCardHeight = 0

  const buffer = levelAmount + 1

  const offset = SIDE_CARD_SET_GAP * buffer

  if (levelAmount) {
    maxCardHeight = (height - offset) / buffer
  }

  let cardHeight = maxCardHeight

  let cardWidth = cardHeight / 1.55

  if (cardWidth * 5 > width) {
    cardWidth = width / 6
    cardHeight = cardWidth * 1.54
  }

  return { width: cardWidth, height: cardHeight }
}
