import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export const BackButton: React.FunctionComponent<{
  darkBg?: boolean
  onPress: () => void
}> = ({ darkBg = true, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        type="entypo"
        name="arrow-long-left"
        color={darkBg ? '#fff' : '#2089dc'}
        tvParallaxProperties={null}
      />
    </TouchableOpacity>
  )
}
