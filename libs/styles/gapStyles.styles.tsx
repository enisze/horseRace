import { StyleSheet } from 'react-native'

export const gapStyles = (gap: number, orientation: 'row' | 'column') =>
  StyleSheet.create({
    container: {
      flexDirection: orientation,
      paddingHorizontal: orientation === 'row' ? gap / -2 : undefined,
      paddingVertical: orientation === 'column' ? gap / -2 : undefined,
    },
    child: {
      marginHorizontal: gap / 2,
      marginVertical: gap / 2,
    },
  })
