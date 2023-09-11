import { useState } from "react";
import { Linking, View } from "react-native";
import { Icon } from "react-native-elements";
import { Paragraph } from "react-native-paper";
import { useTranslation } from "react-i18next";

import { appLink, paypalDonationURL } from "~/constants";
import { HorseRaceButton } from "~/ui/components/buttons/HorseRaceButton";
import { HorseRaceModal } from "~/ui/components/HorseRaceModal";
import { ShareAppButton } from "~/ui/header/ShareAppButton";

export const Header = () => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);

  const donationsNavigate = async () => {
    await Linking.openURL(paypalDonationURL);
  };

  const rateApp = async () => {
    await Linking.openURL(appLink);
  };
  return (
    <>
      <View className="flex flex-row">
        <ShareAppButton />
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
        </HorseRaceButton>
      </View>

      <HorseRaceModal visible={showModal} onClose={() => setShowModal(false)}>
        <Paragraph>{t("about")}</Paragraph>
      </HorseRaceModal>
    </>
  );
};
