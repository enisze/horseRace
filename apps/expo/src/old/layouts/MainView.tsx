import React from "react";
import { View } from "react-native";

import NativeAd from "../ads/NativeAd";
import { RandomCardSet } from "../cards/RandomCardSet";
import { MainCardSet } from "../cardSets/MainCardSet";
import { SideCardSet } from "../cardSets/SideCardSet";
import { MainLayout } from "../components/MainLayout";
import { GOOGLE_ADMOB_MAINVIEW_BANNER_ID } from "../env.config";
import { WinnerModal } from "./WinnerModal";

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
