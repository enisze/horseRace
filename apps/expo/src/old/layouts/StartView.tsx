import type { FunctionComponent } from "react";
import React, { useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { t } from "i18next";

import { Button } from "~/ui/Button";
import NativeAd from "../ads/NativeAd";
import { MainLayout } from "../components/MainLayout";
import { GAMEDATA_STORAGE_KEY } from "../constants";
import { useGameContext } from "../contexts/GameContext";
import { GOOGLE_ADMOB_STARTVIEW_BANNER_ID } from "../env.config";
import { NewGameModal } from "../modals/NewGameModal";

const buttonStyle = "w-40 mt-10";

export const StartView: FunctionComponent = () => {
  const { loadGameState, reset } = useGameContext();

  const [showModal, setShowModal] = useState(false);

  const { navigate } = useNavigation();

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
          onPress={() => {
            getLastGamePlayedData();
            navigate("MainView");
          }}
        />
        <Button
          title={t("statistics")}
          onPress={() => navigate("StatisticsView")}
          className={buttonStyle}
        />
        <Button
          title={t("game.session")}
          onPress={() => navigate("SessionView")}
          className={buttonStyle}
        />
        <NewGameModal
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          onSubmit={() => {
            reset();
            navigate("MainView");
          }}
        />

        <View className="flex items-center">
          <NativeAd id={GOOGLE_ADMOB_STARTVIEW_BANNER_ID} />
        </View>
      </View>
    </MainLayout>
  );
};
