import { FunctionComponent, useEffect, useState } from "react";
import { Text } from "react-native-paper";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";

import NativeAd from "~/old/ads/NativeAd";
import { RankSymbol } from "~/types/RankSymbol.type";
import Card from "../old/cards/Card";
import { HorseRaceModal } from "../old/components/HorseRaceModal";
import { useRestartGame, winnerAtom } from "../old/contexts/GameContext";
import { Button } from "./Button";

export const WinnerModal: FunctionComponent = () => {
  const winner = useAtomValue(winnerAtom);
  const restart = useRestartGame();

  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (winner) {
      setShowModal(true);
    }
  }, [winner]);

  const symbol: RankSymbol = winner ? `A${winner}` : "AC";

  return (
    <HorseRaceModal visible={showModal} onClose={() => setShowModal(false)}>
      <Text variant="headlineMedium" className="text-white">
        {t("winner")}
      </Text>

      {winner && <Card rankSymbol={symbol} />}
      <Button
        onPress={() => {
          setShowModal(false);
          restart();
        }}
        title={t("restart")}
      />
      <NativeAd id="ca-app-pub-7941882405849156/3177221624" />
    </HorseRaceModal>
  );
};
