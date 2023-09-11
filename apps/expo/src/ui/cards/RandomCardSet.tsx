import { FunctionComponent, useState } from "react";
import { View } from "react-native";
import { useAtomValue, useSetAtom } from "jotai";

import { drawnCardsAtom, incrementAtom } from "~/contexts/GameContext";
import { getSymbolFromRankSymbol } from "~/helpers/getSymbolFromRankSymbol";
import { useGetRandomRankSymbol } from "~/hooks/useGetRandomRankSymbol";
import { LevelAction } from "~/types/LevelAction.type";
import { RankSymbol } from "~/types/RankSymbol.type";
import BackCard from "./BackCard";
import Card from "./Card";

export const RandomCardSet: FunctionComponent = () => {
  const getRandomRankSymbol = useGetRandomRankSymbol();
  const increment = useSetAtom(incrementAtom);
  const lastCard = useGetLastRankSymbol("increment");

  const [randomSymbol, setRandomSymbol] = useState<RankSymbol | undefined>(
    lastCard,
  );

  return (
    <View className="flex flex-row space-x-2">
      <BackCard
        onClick={() => {
          const rankSymbol: RankSymbol | undefined =
            getRandomRankSymbol("increment");
          setRandomSymbol(rankSymbol);

          const symbol = getSymbolFromRankSymbol(rankSymbol);

          increment(symbol);
        }}
      />
      {randomSymbol && (
        <View>
          <Card rankSymbol={randomSymbol} />
        </View>
      )}
    </View>
  );
};

const useGetLastRankSymbol = (action: LevelAction): RankSymbol | undefined => {
  const drawnCards = useAtomValue(drawnCardsAtom);

  const filteredCardsByAction = drawnCards.filter(
    (card) => card.action === action,
  );
  const lastCard = filteredCardsByAction.at(-1)?.rankSymbol;

  return lastCard;
};
