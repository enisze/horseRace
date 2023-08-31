import React, { useState } from "react";
import { Linking, StyleSheet, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import { usePathname, useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

import { BackButton } from "../components/buttons/BackButton";
import { HorseRaceButton } from "../components/buttons/HorseRaceButton";
import { HorseRaceModal } from "../components/HorseRaceModal";
import { Paragraph } from "../components/Paragraph";
import { appLink, paypalDonationURL } from "../constants";
import { ShareAppButton } from "./ShareAppButton";

interface ParamList {
  Detail: {
    openDrawer: void;
  };
}

const SettingsHeader: React.FunctionComponent = (props) => {
  const { t } = useTranslation();

  const router = useRouter();

  const pathname = usePathname();

  const isStartScreen = pathname === "/StartView";

  const [showModal, setShowModal] = useState(false);

  const donationsNavigate = () => {
    Linking.openURL(paypalDonationURL);
  };

  const rateApp = () => {
    Linking.openURL(appLink);
  };

  return (
    <>
      <Header
        leftComponent={
          <View>
            {!isStartScreen && (
              <BackButton onPress={() => router.push("/StartView")} />
            )}
          </View>
        }
        rightComponent={
          <View style={styles.headerRight}>
            <ShareAppButton />
            <HorseRaceButton onPress={rateApp} style={{ marginLeft: 4 }}>
              <Icon name="description" color="white" size={24} />
            </HorseRaceButton>
            <HorseRaceButton
              style={{ marginLeft: 4 }}
              onPress={donationsNavigate}
            >
              <Icon type="antdesign" name="rocket1" color="white" size={24} />
            </HorseRaceButton>

            <HorseRaceButton
              style={{ marginLeft: 4 }}
              onPress={() => setShowModal(true)}
            >
              <Icon type="fontawesom5" name="info" color="white" size={24} />
            </HorseRaceButton>
          </View>
        }
        centerComponent={{ text: t("appName"), style: styles.heading }}
      />
      <HorseRaceModal visible={showModal} onClose={() => setShowModal(false)}>
        <Paragraph>{t("about")}</Paragraph>
      </HorseRaceModal>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsHeader;