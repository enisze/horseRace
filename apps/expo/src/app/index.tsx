import type { FunctionComponent } from "react";
import React, { useState } from "react";
import { View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { t } from "i18next";

import { MainLayout } from "../old/components/MainLayout";
import { NewGameModal } from "../old/modals/NewGameModal";
import { Button } from "../ui/Button";

const buttonStyle = "w-40 mt-10";

const StartView: FunctionComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  return (
    <MainLayout>
      <Stack.Screen options={{ title: "Start Page" }} />
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
            router.push("/MainView");
          }}
        />

        <View className="flex items-center">
          {/* <NativeAd id={GOOGLE_ADMOB_STARTVIEW_BANNER_ID ?? ""} /> */}
        </View>
      </View>
    </MainLayout>
  );
};

export default StartView;
