import { atom, useAtom, useAtomValue } from "jotai";
import {
  atomWithReset,
  atomWithStorage,
  RESET,
  selectAtom,
  useResetAtom,
} from "jotai/utils";

import { GAMEDATA_STORAGE_KEY } from "~/constants";
import { LevelAction } from "~/types/LevelAction.type";
import { RankSymbol } from "~/types/RankSymbol.type";
import { CardSymbol } from "~/types/Symbol.type";

interface DrawnCard {
  rankSymbol: RankSymbol;
  action: LevelAction;
}

interface GameData {
  C: number;
  D: number;
  H: number;
  S: number;
  drawnCards: DrawnCard[];
  levelAmount: number;
}

export const winnerAtom = atomWithReset<CardSymbol | undefined>(undefined);

export const gameDataAtom = atomWithStorage<GameData>(GAMEDATA_STORAGE_KEY, {
  C: 0,
  D: 0,
  H: 0,
  S: 0,
  drawnCards: [],
  levelAmount: 5,
});

export const levelAtom = atom(
  (get) => get(gameDataAtom).levelAmount,

  (get, set, level: number) => {
    set(gameDataAtom, (prev) => {
      return {
        ...prev,
        levelAmount: level,
      };
    });
  },
);

const incrementFnc = (value: number, levelAmount: number) =>
  value >= 0 && value < levelAmount ? value + 1 : 0;

export const incrementAtom = atom(null, (get, set, symbol: CardSymbol) => {
  set(gameDataAtom, (prev) => {
    const levelAmount = prev.levelAmount;
    switch (symbol) {
      case "C": {
        const C = incrementFnc(prev.C, levelAmount);
        if (C === prev.levelAmount) set(winnerAtom, "C");
        return { ...prev, C };
      }
      case "D": {
        const D = incrementFnc(prev.D, levelAmount);
        if (D === prev.levelAmount) set(winnerAtom, "D");
        return { ...prev, D };
      }
      case "H": {
        const H = incrementFnc(prev.H, levelAmount);
        if (H === prev.levelAmount) set(winnerAtom, "H");
        return { ...prev, H };
      }
      case "S": {
        const S = incrementFnc(prev.S, levelAmount);
        if (S === prev.levelAmount) set(winnerAtom, "S");
        return { ...prev, S };
      }
    }
  });
});

const decrementFnc = (value: number, levelAmount: number) =>
  value > 0 && value < levelAmount ? value - 1 : 0;

export const decrementAtom = atom(null, (get, set, symbol: CardSymbol) => {
  set(gameDataAtom, (prev) => {
    const levelAmount = prev.levelAmount;

    switch (symbol) {
      case "C":
        return { ...prev, C: decrementFnc(prev.C, levelAmount) };
      case "D":
        return { ...prev, D: decrementFnc(prev.D, levelAmount) };
      case "H":
        return { ...prev, H: decrementFnc(prev.H, levelAmount) };
      case "S":
        return { ...prev, S: decrementFnc(prev.S, levelAmount) };
    }
  });
});

export const currentLevelAtom = atom((get) => {
  const data = get(gameDataAtom);
  const { C, D, H, S } = data;
  return Math.min(...[C, D, H, S]) ?? 0;
});

const currentLevelBySymbolAtom = atom((get) => {
  const data = get(gameDataAtom);
  const { C, D, H, S } = data;
  return {
    C,
    D,
    H,
    S,
  };
});

export const useGetCurrentLevelBySymbol = (symbol: CardSymbol) => {
  const { C, D, H, S } = useAtomValue(currentLevelBySymbolAtom);

  switch (symbol) {
    case "C":
      return C;
    case "D":
      return D;
    case "H":
      return H;
    case "S":
      return S;
  }
};

export const useResetGame = () => {
  const resetWinner = useResetAtom(winnerAtom);

  const [, setGameData] = useAtom(gameDataAtom);

  return () => {
    setGameData(RESET);
    resetWinner();
  };
};

export const useRestartGame = () => {
  const [gameData, setGameData] = useAtom(gameDataAtom);

  const resetWinner = useResetAtom(winnerAtom);

  return () => {
    setGameData({
      C: 0,
      D: 0,
      H: 0,
      S: 0,
      drawnCards: [],
      levelAmount: gameData.levelAmount,
    });
    resetWinner();
  };
};

export const appendCardAtom = atom(null, (get, set, drawnCard: DrawnCard) => {
  set(gameDataAtom, (prev) => {
    return { ...prev, drawnCards: [...prev.drawnCards, drawnCard] };
  });
});

export const drawnCardsAtom = selectAtom(
  gameDataAtom,
  (data) => data.drawnCards,
);
