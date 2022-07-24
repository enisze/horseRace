import { AdMobBanner } from 'expo-ads-admob'

import React, { FunctionComponent } from 'react'
import { useDimensions } from '../hooks/useDimensions'

type BannerSize =
  | 'largeBanner'
  | 'banner'
  | 'mediumRectangle'
  | 'fullBanner'
  | 'leaderboard'
  | 'smartBannerPortrait'
  | 'smartBannerLandscape'

const NativeAd: FunctionComponent<{ id: string }> = ({ id }) => {
  const bannerSize = useGetBannerSize()

  return (
    <AdMobBanner
      bannerSize={bannerSize}
      adUnitID={id}
      servePersonalizedAds // true or false
      onDidFailToReceiveAdWithError={(error) => {
        console.log(error)
      }}
    />
  )
}

export default NativeAd

const useGetBannerSize = (): BannerSize => {
  const { width } = useDimensions()

  if (width > 768) {
    return 'fullBanner'
  }
  return 'largeBanner'
}