import React from "react";
import { View } from "react-native";

import NativeAd from "../old/ads/NativeAd";
import { RandomCardSet } from "../old/cards/RandomCardSet";
import { MainCardSet } from "../old/cardSets/MainCardSet";
import { SideCardSet } from "../old/cardSets/SideCardSet";
import { MainLayout } from "../old/components/MainLayout";
import { GOOGLE_ADMOB_MAINVIEW_BANNER_ID } from "../old/env.config";
import { WinnerModal } from "../ui/WinnerModal";

export const MainView = () => {
  return (
    <MainLayout>
      <View className="flex h-full w-full pt-10">
        <View className="flex flex-row">
          <SideCardSet />
          <MainCardSet />
        </View>

        <View className="flex items-center justify-center pb-2">
          <RandomCardSet />
        </View>
        <WinnerModal />
        <View className="flex items-center">
          <NativeAd id={GOOGLE_ADMOB_MAINVIEW_BANNER_ID} />
        </View>
      </View>
    </MainLayout>
  );
};
