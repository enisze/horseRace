import type { FunctionComponent } from "react";
import React from "react";
import { Text, View } from "react-native";
import { Icon, Slider } from "react-native-elements";
import { Stack, useRouter } from "expo-router";
import { t } from "i18next";
import { useAtom } from "jotai";

import NativeAd from "~/old/ads/NativeAd";
import { levelAtom } from "~/old/contexts/GameContext";
import { MainLayout } from "../old/components/MainLayout";
import { Button } from "../ui/Button";

const buttonStyle = "";

const StartView: FunctionComponent = () => {
  const router = useRouter();
  const [level, setLevel] = useAtom(levelAtom);

  return (
    <MainLayout>
      <Stack.Screen
        options={{ title: "Horse Race", headerTitleAlign: "center" }}
      />

      <View className="flex h-full flex-col items-center justify-center">
        <View className="flex w-40 pb-2">
          <Slider
            value={level}
            onValueChange={setLevel}
            maximumValue={10}
            minimumValue={1}
            step={1}
            allowTouchTrack
            trackStyle={{ height: 5, backgroundColor: "transparent" }}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: "transparent",
            }}
            thumbProps={{
              children: (
                <Icon
                  name="circle"
                  type="material"
                  size={15}
                  reverse
                  containerStyle={{ bottom: 15, right: 15 }}
                />
              ),
            }}
          />
          <Text className="text-center text-white">{"Level: " + level}</Text>
        </View>
        <Button
          title={t("game.start")}
          onPress={() => {
            router.push("/MainView");
          }}
          className={buttonStyle}
        />
        <Button
          title={t("game.continue")}
          className={buttonStyle}
          onPress={() => {
            router.push("/MainView");
          }}
        />
        <Button
          title={t("statistics")}
          onPress={() => router.push("/StatisticsView")}
          className={buttonStyle}
        />
        <Button
          title={t("game.session")}
          onPress={() => router.push("/SessionView")}
          className={buttonStyle}
        />

        <View className="flex items-center">
          <NativeAd id="ca-app-pub-7941882405849156/1638012899" />
        </View>
      </View>
    </MainLayout>
  );
};

export default StartView;
