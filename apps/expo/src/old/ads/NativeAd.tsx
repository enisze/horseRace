import React, { FunctionComponent } from "react";
import Constants from "expo-constants";

import { useDimensions } from "../hooks/useDimensions";

type AdsType =
  typeof import("/Users/enis/horseRace/node_modules/react-native-google-mobile-ads/lib/typescript/index");

const importAds = () => {
  return Constants.appOwnership === "expo"
    ? null
    : import("react-native-google-mobile-ads");
};

const NativeAd: FunctionComponent<{ id: string }> = ({ id }) => {
  const useGetBannerSize = () => {
    const { width } = useDimensions();

    if (width > 768) {
      return ads?.BannerAdSize.FULL_BANNER;
    }
    return ads?.BannerAdSize.LARGE_BANNER;
  };

  const bannerSize = useGetBannerSize();

  let ads: AdsType | null = null;
  //@ts-expect-error expect error
  ads = importAds();

  if (!ads) return null;

  return (
    <ads.BannerAd
      unitId={id}
      size={bannerSize ?? ""}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};

export default NativeAd;
