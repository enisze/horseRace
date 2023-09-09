import React from "react";
import { ImageBackground, View } from "react-native";
import { Stack } from "expo-router";

import NativeAd from "~/old/ads/NativeAd";
import { RandomCardSet } from "../old/cards/RandomCardSet";
import { MainCardSet } from "../old/cardSets/MainCardSet";
import { SideCardSet } from "../old/cardSets/SideCardSet";
import { WinnerModal } from "../ui/WinnerModal";

const MainView = () => {
  return (
    <View className="h-full w-full">
      <ImageBackground
        source={require("../../assets/background_1.png")}
        className="-m-3"
      >
        <Stack.Screen options={{ title: "" }} />
        <View className="flex h-full w-full">
          <View className="flex flex-row p-6">
            <SideCardSet />
            <MainCardSet />
          </View>

          <View className="flex items-center justify-center pb-2">
            <RandomCardSet />
          </View>
          <WinnerModal />
          <View className="flex items-center">
            <NativeAd id="ca-app-pub-7941882405849156/9049599050" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainView;
