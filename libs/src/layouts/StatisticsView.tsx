import React from 'react'
import { Text, View } from 'react-native'
import { MainLayout } from '../components/MainLayout'
import { tw } from '../tailwind'

export const StatisticsView: React.FC = () => {
  return (
    <MainLayout>
      <View style={tw`flex justify-center items-center h-full w-full`}>
        <Text style={tw`text-3xl`}>Coming soon...</Text>
      </View>
    </MainLayout>
  )
}
