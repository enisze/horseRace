import React from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { MainLayout } from "../components/MainLayout";
import { Paragraph } from "../components/Paragraph";

export const SessionView = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <View className="flex h-full w-full items-center justify-center">
        <Paragraph className="text-3xl">{t("comingSoon.session")}</Paragraph>
      </View>
    </MainLayout>
  );
};
