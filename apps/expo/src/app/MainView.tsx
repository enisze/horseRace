import React from "react";
import { ImageBackground, View } from "react-native";
import { Stack } from "expo-router";

import { RandomCardSet } from "../old/cards/RandomCardSet";
import { MainCardSet } from "../old/cardSets/MainCardSet";
import { SideCardSet } from "../old/cardSets/SideCardSet";
import { WinnerModal } from "../ui/WinnerModal";

const MainView = () => {
  return (
    <View className="h-full w-full">
      <ImageBackground source={require("../../assets/background_1.png")}>
        <Stack.Screen options={{ title: "" }} />
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
            {/* <NativeAd id={GOOGLE_ADMOB_MAINVIEW_BANNER_ID} /> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainView;
