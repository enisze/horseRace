import type { FunctionComponent } from "react";
import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { t } from "i18next";

import NativeAd from "../old/ads/NativeAd";
import { MainLayout } from "../old/components/MainLayout";
import { GAMEDATA_STORAGE_KEY } from "../old/constants";
import { useGameContext } from "../old/contexts/GameContext";
import { GOOGLE_ADMOB_STARTVIEW_BANNER_ID } from "../old/env.config";
import { NewGameModal } from "../old/modals/NewGameModal";
import { Button } from "../ui/Button";

const buttonStyle = "w-40 mt-10";

export const StartView: FunctionComponent = () => {
  const { loadGameState, reset } = useGameContext();

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const getLastGamePlayedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(GAMEDATA_STORAGE_KEY);
      const gameData = jsonValue != null ? JSON.parse(jsonValue) : null;
      loadGameState(gameData);
    } catch (error: any) {}
  };

  return (
    <MainLayout>
      <View className="flex h-full flex-col items-center justify-center">
        <Button
          title={t("game.start")}
          onPress={() => {
            setShowModal(true);
          }}
          className={buttonStyle}
        />
        <Button
          title={t("game.continue")}
          className={buttonStyle}
          onPress={async () => {
            await getLastGamePlayedData();
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
        <NewGameModal
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          onSubmit={() => {
            reset();
            router.push("/MainView");
          }}
        />

        <View className="flex items-center">
          <NativeAd id={GOOGLE_ADMOB_STARTVIEW_BANNER_ID} />
        </View>
      </View>
    </MainLayout>
  );
};
