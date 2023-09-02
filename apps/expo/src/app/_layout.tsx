import React, { useState } from "react";
import { Linking, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import mobileAds from "react-native-google-mobile-ads";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { I18nextProvider, useTranslation } from "react-i18next";

import { HorseRaceModal } from "../old/components/HorseRaceModal";
import { Paragraph } from "../old/components/Paragraph";
import { appLink, paypalDonationURL } from "../old/constants";
import { GameContextProvider } from "../old/contexts/GameContext";
import MainProvider from "../old/helpers/MainProvider";
import i18n from "../old/i18n";
import { TRPCProvider } from "../utils/api";

void mobileAds()
  .initialize()
  .then((adapterStatuses) => {
    // Initialization complete!
  });

// This is the main layout of the app
// It wraps your pages with the providers they need

const RootLayout = () => {
  return (
    <TRPCProvider>
      {/*
        The Stack component displays the current page.
        It also allows you to configure your screens 
      */}

      <GameContextProvider>
        <I18nextProvider i18n={i18n}>
          <SafeAreaProvider>
            <MainProvider>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack
                  screenOptions={{
                    headerStyle: {
                      backgroundColor: "#f472b6",
                    },
                    // header: () => <Header />,
                  }}
                />
                <StatusBar />
              </GestureHandlerRootView>
            </MainProvider>
          </SafeAreaProvider>
        </I18nextProvider>
      </GameContextProvider>
    </TRPCProvider>
  );
};

export default RootLayout;

const Header = () => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);

  const donationsNavigate = () => {
    Linking.openURL(paypalDonationURL);
  };

  const rateApp = () => {
    Linking.openURL(appLink);
  };
  return (
    <>
      <View className="flex h-3">
        {/* <ShareAppButton />
        <HorseRaceButton onPress={rateApp} style={{ marginLeft: 4 }}>
          <Icon name="description" color="white" size={24} />
        </HorseRaceButton>
        <HorseRaceButton style={{ marginLeft: 4 }} onPress={donationsNavigate}>
          <Icon type="antdesign" name="rocket1" color="white" size={24} />
        </HorseRaceButton>

        <HorseRaceButton
          style={{ marginLeft: 4 }}
          onPress={() => setShowModal(true)}
        >
          <Icon type="fontawesom5" name="info" color="white" size={24} />
        </HorseRaceButton> */}
        <Text>lol</Text>
      </View>

      <HorseRaceModal visible={showModal} onClose={() => setShowModal(false)}>
        <Paragraph>{t("about")}</Paragraph>
      </HorseRaceModal>
    </>
  );
};
