import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

type ParamList = {
  Detail: {
    openDrawer: void
  }
}

const SettingsHeader: React.FunctionComponent = (props) => {
  const docsNavigate = () => {
    // Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`)
  }

  const playgroundNavigate = () => {
    // Linking.openURL(`https://@rneui/themed.js.org/#/${props.view}`)
  }

  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={docsNavigate}>
              <Icon
                name="description"
                color="white"
                tvParallaxProperties={null}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={playgroundNavigate}
            >
              <Icon
                type="antdesign"
                name="rocket1"
                color="white"
                tvParallaxProperties={null}
              />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{ text: 'Header', style: styles.heading }}
      />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
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
