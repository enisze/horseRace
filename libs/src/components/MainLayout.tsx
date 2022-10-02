import React, { FunctionComponent, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { tw } from '../tailwind'

export type MainLayoutProps = PropsWithChildren<{}>

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
}) => {
  return <View style={tw`bg-blue-100 p-2`}>{children}</View>
}
