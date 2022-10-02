import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import NativeAd from '../ads/NativeAd'
import { RandomCardSet } from '../cards/RandomCardSet'
import { MainCardSet } from '../cardSets/MainCardSet'
import { SideCardSet } from '../cardSets/SideCardSet'
import { MainLayout } from '../components/MainLayout'
import { GOOGLE_ADMOB_MAINVIEW_BANNER_ID } from '../env.config'
import { tw } from '../tailwind'
import { WinnerModal } from './WinnerModal'

export const MainView: FunctionComponent<{}> = () => {
  return (
    <MainLayout>
      <View style={tw`flex pt-10 h-full w-full`}>
        <View style={tw`flex flex-row`}>
          <SideCardSet />
          <MainCardSet />
        </View>

        <View style={tw`flex justify-center items-center pb-2`}>
          <RandomCardSet />
        </View>
        <WinnerModal />
        <View style={tw`flex items-center`}>
          <NativeAd id={GOOGLE_ADMOB_MAINVIEW_BANNER_ID} />
        </View>
      </View>
    </MainLayout>
  )
}
