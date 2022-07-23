import { AdMobBanner } from 'expo-ads-admob'

import React, { FunctionComponent } from 'react'
import { GOOGLE_ADMOB_PRODUCTION_KEY } from '../env.config'
import { useDimensions } from '../hooks/useDimensions'

const ID = GOOGLE_ADMOB_PRODUCTION_KEY

const ID2 = 'ca-app-pub-3940256099942544/6300978111'

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
    <>
      <AdMobBanner
        bannerSize={bannerSize}
        adUnitID={ID}
        servePersonalizedAds // true or false
      />

      <AdMobBanner
        bannerSize={bannerSize}
        adUnitID={ID2}
        servePersonalizedAds // true or false
      />
    </>
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
