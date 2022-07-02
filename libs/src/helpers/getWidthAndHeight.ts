import { Dimensions } from 'react-native'

export const getWidthAndHeight = () => {
  const win = Dimensions.get('window')
  const width = win.width / 5
  const height = width * 1.55
  return { width, height }
}
