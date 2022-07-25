import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { useGameContext } from '../helpers/GameContext'

type ParamList = {
  Detail: {
    openDrawer: void
  }
}

const SettingsHeader: React.FunctionComponent = (props) => {
  const { setGameState } = useGameContext()
  const navigateBack = () => {
    setGameState('off')
  }

  return (
    <Header
      leftComponent={
        <View>
          <TouchableOpacity onPress={navigateBack}>
            <Icon
              type="entypo"
              name="arrow-long-left"
              color="#fff"
              tvParallaxProperties={null}
            />
          </TouchableOpacity>
        </View>
      }
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon
              name="description"
              color="white"
              tvParallaxProperties={null}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Icon
              type="antdesign"
              name="rocket1"
              color="white"
              tvParallaxProperties={null}
            />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{ text: 'HorseRace', style: styles.heading }}
    />
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default SettingsHeader
