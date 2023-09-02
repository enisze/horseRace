import React, { FunctionComponent, useEffect, useState } from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { RankSymbol } from "~/types/RankSymbol.type";
import Card from "../old/cards/Card";
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

  const symbol: RankSymbol = winner ? `A${winner}` : "AC";

  return (
    <HorseRaceModal
      visible={showModal}
      onClose={() => setShowModal(false)}
      showBackButton={false}
    >
      <Paragraph>{t("winner")}</Paragraph>

      {winner && <Card rankSymbol={symbol} />}
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
