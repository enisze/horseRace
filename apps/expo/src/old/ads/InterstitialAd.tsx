import React, { FunctionComponent, useEffect, useState } from "react";
import { Platform, View } from "react-native";
import { AdEventType, InterstitialAd } from "react-native-google-mobile-ads";

import { useDimensions } from "../hooks/useDimensions";

type BannerSize =
  | "largeBanner"
  | "banner"
  | "mediumRectangle"
  | "fullBanner"
  | "leaderboard"
  | "smartBannerPortrait"
  | "smartBannerLandscape";

const NativeAd: FunctionComponent<{ id: string }> = ({ id }) => {
  const bannerSize = useGetBannerSize();

  const interstitial = InterstitialAd.createForAdRequest(id, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
  });

  if (Platform.OS !== "android") return null;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  return (
    // <AdMobBanner
    //   bannerSize={bannerSize}
    //   adUnitID={id}
    //   servePersonalizedAds // true or false
    //   onDidFailToReceiveAdWithError={(error) => {
    //     console.log(error)
    //   }}
    // />
    <View></View>
  );
};

export default NativeAd;

const useGetBannerSize = (): BannerSize => {
  const { width } = useDimensions();

  if (width > 768) {
    return "fullBanner";
  }
  return "largeBanner";
};
