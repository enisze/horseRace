import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { I18nextProvider, useTranslation } from "react-i18next"
import { Linking, View } from "react-native"
import { Icon } from "react-native-elements"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import mobileAds from "react-native-google-mobile-ads"
import { PaperProvider } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { HorseRaceModal } from "../old/components/HorseRaceModal"
import { Paragraph } from "../old/components/Paragraph"
import { HorseRaceButton } from "../old/components/buttons/HorseRaceButton"
import { appLink, paypalDonationURL } from "../old/constants"
import { ShareAppButton } from "../old/header/ShareAppButton"
import i18n from "../old/i18n"
import { TRPCProvider } from "../utils/api"
import { AddWinnerStatisticsSideEffect } from "./SideEffects/AddWinnerStatisticsSideEffect"

void mobileAds()
  .initialize()
  .then(() => {
    // Initialization complete!
  })

// This is the main layout of the app
// It wraps your pages with the providers they need

// export const UpdateAppSideEffect = () => {
//   async function onFetchUpdateAsync() {
//     try {
//       const update = await checkForUpdateAsync()

//       if (update.isAvailable) {
//         await fetchUpdateAsync()
//         await reloadAsync()
//       }
//     } catch (error) {
//       // You can also add an alert() to see the error message in case of an error when fetching updates.
//       alert(`Error fetching latest Expo update: ${error}`)
//     }
//   }

//   return (
//     <View>
//       <Button title='Fetch update' onPress={onFetchUpdateAsync} />
//     </View>
//   )
// }

const RootLayout = () => {
  return (
    <TRPCProvider>
      {/*
        The Stack component displays the current page.
        It also allows you to configure your screens 
      */}

      <I18nextProvider i18n={i18n}>
        <PaperProvider>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Stack
                screenOptions={{
                  headerStyle: {
                    backgroundColor: "#6b21a8"
                  },
                  headerTitleStyle: { color: "white" },
                  headerRight: () => <Header />
                }}
              />
              <AddWinnerStatisticsSideEffect />
              <StatusBar />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </PaperProvider>
      </I18nextProvider>
    </TRPCProvider>
  )
}

export default RootLayout

const Header = () => {
  const { t } = useTranslation()

  const [showModal, setShowModal] = useState(false)

  const donationsNavigate = async () => {
    await Linking.openURL(paypalDonationURL)
  }

  const rateApp = async () => {
    await Linking.openURL(appLink)
  }
  return (
    <>
      <View className='flex flex-row'>
        <ShareAppButton />
        <HorseRaceButton onPress={rateApp} style={{ marginLeft: 4 }}>
          <Icon name='description' color='white' size={24} />
        </HorseRaceButton>
        <HorseRaceButton style={{ marginLeft: 4 }} onPress={donationsNavigate}>
          <Icon type='antdesign' name='rocket1' color='white' size={24} />
        </HorseRaceButton>

        <HorseRaceButton
          style={{ marginLeft: 4 }}
          onPress={() => setShowModal(true)}
        >
          <Icon type='fontawesom5' name='info' color='white' size={24} />
        </HorseRaceButton>
      </View>

      <HorseRaceModal visible={showModal} onClose={() => setShowModal(false)}>
        <Paragraph>{t("about")}</Paragraph>
      </HorseRaceModal>
    </>
  )
}
