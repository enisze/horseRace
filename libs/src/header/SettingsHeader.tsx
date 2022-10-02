import React from 'react'
import { Linking, StyleSheet, View } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { appLink, paypalDonationURL } from '../constants'
import ShareApp from './ShareApp'

import { useNavigation } from '@react-navigation/native'
import { BackButton } from '../components/BackButton'
import { HorseRaceButton } from '../components/HorseRaceButton'
import { useIsInNavigationScreen } from '../hooks/useIsInNavigationScreen'

type ParamList = {
  Detail: {
    openDrawer: void
  }
}

const SettingsHeader: React.FunctionComponent = (props) => {
  const { navigate } = useNavigation()

  const isStartScreen = useIsInNavigationScreen('StartView')

  const donationsNavigate = () => {
    Linking.openURL(paypalDonationURL)
  }

  const rateApp = () => {
    Linking.openURL(appLink)
  }

  return (
    <Header
      leftComponent={
        <View>
          {!isStartScreen && (
            <BackButton onPress={() => navigate('StartView')} />
          )}
        </View>
      }
      rightComponent={
        <View style={styles.headerRight}>
          <ShareApp />
          <HorseRaceButton onPress={rateApp} style={{ marginLeft: 10 }}>
            <Icon
              name="description"
              color="white"
              tvParallaxProperties={null}
            />
          </HorseRaceButton>
          <HorseRaceButton
            style={{ marginLeft: 10 }}
            onPress={donationsNavigate}
          >
            <Icon
              type="antdesign"
              name="rocket1"
              color="white"
              tvParallaxProperties={null}
            />
          </HorseRaceButton>
        </View>
      }
      centerComponent={{ text: 'HorseRace', style: styles.heading }}
    />
  )
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default SettingsHeader
