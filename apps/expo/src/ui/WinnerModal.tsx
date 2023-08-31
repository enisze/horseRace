import React, { FunctionComponent, useEffect, useState } from "react";
import { View } from "react-native";
import { Card } from "react-native-elements";
import { useTranslation } from "react-i18next";

import { HorseRaceButton } from "../old/components/buttons/HorseRaceButton";
import { HorseRaceModal } from "../old/components/HorseRaceModal";
import { Paragraph } from "../old/components/Paragraph";
import { useGameContext } from "../old/contexts/GameContext";

export const WinnerModal: FunctionComponent = () => {
  const { winner, reset } = useGameContext();

  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (winner) {
      setShowModal(true);
    }
  }, [winner]);

  return (
    <HorseRaceModal
      visible={showModal}
      onClose={() => setShowModal(false)}
      showBackButton={false}
    >
      <Paragraph>{t("winner")}</Paragraph>

      {winner && <Card rankSymbol={`A${winner}`} />}
      <View className="rounded border bg-green-200 p-2 shadow-2xl shadow-black">
        <HorseRaceButton
          onPress={() => {
            setShowModal(false);
            reset();
          }}
        >
          <Paragraph>{t("restart")}</Paragraph>
        </HorseRaceButton>
      </View>
      {/* <NativeAd id={GOOGLE_ADMOB_MODAL_BANNER_ID} /> */}
    </HorseRaceModal>
  );
};
