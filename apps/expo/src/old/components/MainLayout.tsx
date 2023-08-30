import React, { FunctionComponent, PropsWithChildren } from 'react'
import { View, ViewProps } from 'react-native'
import { tw } from '../tailwind'

export type MainLayoutProps = PropsWithChildren<ViewProps>

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <View style={[tw`bg-blue-100 p-2`, style]} {...props}>
      {children}
    </View>
  )
}
