import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { I18nextProvider } from "react-i18next";

import { CurrentScreenContextProvider } from "~/old/contexts/CurrentScreenContext";
import { GameContextProvider } from "~/old/contexts/GameContext";
import SettingsHeader from "~/old/header/SettingsHeader";
import MainProvider from "~/old/helpers/MainProvider";
import i18n from "~/old/i18n";
import { TRPCProvider } from "~/utils/api";

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
            <CurrentScreenContextProvider>
              <MainProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                  <AppNavigatonContainer>
                    <SettingsHeader />
                    <AppNavigation />

                    <Stack
                      screenOptions={{
                        headerStyle: {
                          backgroundColor: "#f472b6",
                        },
                      }}
                    />
                    <StatusBar />
                  </AppNavigatonContainer>
                </GestureHandlerRootView>
              </MainProvider>
            </CurrentScreenContextProvider>
          </SafeAreaProvider>
        </I18nextProvider>
      </GameContextProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
