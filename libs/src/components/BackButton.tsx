import React from 'react'
import { Icon } from 'react-native-elements'
import { HorseRaceIconButton } from './HorseRaceIconButton'

export const BackButton: React.FunctionComponent<{
  darkBg?: boolean
  onPress: () => void
}> = ({ darkBg = true, onPress }) => {
  return (
    <HorseRaceIconButton onPress={onPress}>
      <Icon
        type="entypo"
        name="arrow-long-left"
        color={darkBg ? '#fff' : '#2089dc'}
        tvParallaxProperties={null}
      />
    </HorseRaceIconButton>
  )
}
