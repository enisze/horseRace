import { useCallback } from "react";

import { LevelAction } from "../../types/LevelAction.type";
import { RankSymbol } from "../../types/RankSymbol.type";
import { useGameContext } from "../contexts/GameContext";
import { rankSymbolList } from "../dataLists/rankSymbolList";

export const useGetRandomRankSymbol = () => {
  const { drawnCards, appendDrawnCard } = useGameContext();

  return useCallback(
    (action: LevelAction) => {
      const max = rankSymbolList.length - 1;

      let random = Math.floor(Math.random() * (max + 1));

      let card: RankSymbol | undefined = rankSymbolList.at(random);

      if (!card) return;

      const cardSymbol = card;

      while (drawnCards.map((value) => value.rankSymbol).includes(cardSymbol)) {
        random = Math.floor(Math.random() * (max + 1));
        card = rankSymbolList[random];
      }

      appendDrawnCard({ rankSymbol: cardSymbol, action });

      return card;
    },
    [drawnCards, appendDrawnCard],
  );
};
