import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";

import { MainLayout } from "../old/components/MainLayout";
import { Paragraph } from "../old/components/Paragraph";

const SessionView = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <Stack.Screen options={{ title: "Sessions" }} />
      <View className="flex h-full w-full items-center justify-center ">
        <Paragraph className="text-3xl text-white">
          {t("comingSoon.session")}
        </Paragraph>
      </View>
    </MainLayout>
  );
};

export default SessionView;
