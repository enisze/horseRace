import React, { useState } from 'react'
import { Linking, StyleSheet, View } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { appLink, paypalDonationURL } from '../constants'
import { ShareAppButton } from './ShareAppButton'

import { useNavigation } from '@react-navigation/native'
import { BackButton } from '../components/BackButton'
import { HorseRaceButton } from '../components/HorseRaceButton'
import { HorseRaceModal } from '../components/HorseRaceModal'
import { Paragraph } from '../components/Paragraph'
import { useIsInNavigationScreen } from '../hooks/useIsInNavigationScreen'

type ParamList = {
  Detail: {
    openDrawer: void
  }
}

const SettingsHeader: React.FunctionComponent = (props) => {
  const { navigate } = useNavigation()

  const isStartScreen = useIsInNavigationScreen('StartView')

  const [showModal, setShowModal] = useState(false)

  const donationsNavigate = () => {
    Linking.openURL(paypalDonationURL)
  }

  const rateApp = () => {
    Linking.openURL(appLink)
  }

  return (
    <>
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
            <ShareAppButton />
            <HorseRaceButton onPress={rateApp} style={{ marginLeft: 4 }}>
              <Icon
                name="description"
                color="white"
                tvParallaxProperties={null}
                size={24}
              />
            </HorseRaceButton>
            <HorseRaceButton
              style={{ marginLeft: 4 }}
              onPress={donationsNavigate}
            >
              <Icon
                type="antdesign"
                name="rocket1"
                color="white"
                tvParallaxProperties={null}
                size={24}
              />
            </HorseRaceButton>

            <HorseRaceButton
              style={{ marginLeft: 4 }}
              onPress={() => setShowModal(true)}
            >
              <Icon
                type="fontawesom5"
                name="info"
                color="white"
                tvParallaxProperties={null}
                size={24}
              />
            </HorseRaceButton>
          </View>
        }
        centerComponent={{ text: 'HorseRace', style: styles.heading }}
      />
      <HorseRaceModal visible={showModal} onClose={() => setShowModal(false)}>
        <Paragraph>
          Hey you, thank you for using my app :) Hopefully you enjoy it and
          could give me some feedback for improvement, which is much
          appreciated. I am trying my best to constantly improving this app in
          my free time. But as I do not have always that much time / motivation
          to code after I coded a full working day, updates may be delayed. I
          hope you understand this.
          {'\n'}
          {'\n'}
          Feel free to support me, if you like this app :) Thank you alot!
        </Paragraph>
      </HorseRaceModal>
    </>
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
