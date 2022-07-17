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

const NativeAd: FunctionComponent = () => {
  const bannerSize = useGetBannerSize()
  return (
    <AdMobBanner
      bannerSize={bannerSize}
      adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds // true or false
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
