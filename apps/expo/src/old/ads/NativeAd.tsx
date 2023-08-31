import React, { FunctionComponent } from "react";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

import { useDimensions } from "../hooks/useDimensions";

const NativeAd: FunctionComponent<{ id: string }> = ({ id }) => {
  const useGetBannerSize = () => {
    const { width } = useDimensions();

    if (width > 768) {
      return BannerAdSize.FULL_BANNER;
    }
    return BannerAdSize.LARGE_BANNER;
  };

  const bannerSize = useGetBannerSize();
  console.log(id);

  return (
    <BannerAd
      unitId={id}
      size={bannerSize ?? ""}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};

export default NativeAd;
