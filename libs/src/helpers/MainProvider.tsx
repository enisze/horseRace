import { setTestDeviceIDAsync } from 'expo-ads-admob'
import React, { FunctionComponent, useEffect } from 'react'

const MainProvider: FunctionComponent = ({ children }) => {
  const test = async () => {
    await setTestDeviceIDAsync('EMULATOR')
  }

  useEffect(() => {
    test()
  }, [test])

  return <>{children}</>
}

export default MainProvider
