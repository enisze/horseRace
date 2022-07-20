import { setTestDeviceIDAsync } from 'expo-ads-admob'
import React, { FunctionComponent, useEffect } from 'react'
import { TEST } from '../env.config'

const MainProvider: FunctionComponent = ({ children }) => {
  const test = async () => {
    await setTestDeviceIDAsync('EMULATOR')
  }

  console.log(TEST)

  useEffect(() => {
    test()
  }, [test])

  return <>{children}</>
}

export default MainProvider
