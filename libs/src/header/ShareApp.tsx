import React from 'react'
import { Share } from 'react-native'
import { Icon } from 'react-native-elements'
import { HorseRaceButton } from '../components/HorseRaceButton'
import { appLink } from '../constants'

const ShareApp = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'You should try this drinking app for fun and good times :)\n\n' +
          appLink,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <HorseRaceButton onPress={onShare}>
      <Icon
        type="entypo"
        name="share"
        color="white"
        tvParallaxProperties={null}
      />
    </HorseRaceButton>
  )
}

export default ShareApp
