import React from 'react'
import { View } from 'react-native'
import { MainLayout } from '../components/MainLayout'
import { Paragraph } from '../components/Paragraph'
import { tw } from '../tailwind'

export const SessionView: React.FC = () => {
  return (
    <MainLayout>
      <View style={tw`flex justify-center items-center h-full w-full`}>
        <Paragraph style={tw`text-3xl`}>
          Playing with your friends will be coming soon...
        </Paragraph>
      </View>
    </MainLayout>
  )
}
