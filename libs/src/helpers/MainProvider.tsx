import { setTestDeviceIDAsync } from 'expo-ads-admob'
import React, { FunctionComponent, useEffect } from 'react'

import { Platform } from 'react-native'

const MainProvider: FunctionComponent = ({ children }) => {
  const test = async () => {
    if (Platform.OS !== 'web') {
      await setTestDeviceIDAsync('EMULATOR')
    }
  }

  useEffect(() => {
    test()
  }, [test])

  return <>{children}</>
}

export default MainProvider
