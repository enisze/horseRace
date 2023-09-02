import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LevelAction } from "../../types/LevelAction.type";
import { RankSymbol } from "../../types/RankSymbol.type";
import { CardSymbol } from "../../types/Symbol.type";
import { GAMEDATA_STORAGE_KEY } from "../constants";

interface GameData {
  CAmount: number;
  DAmount: number;
  HAmount: number;
  SAmount: number;
  drawnCards: DrawnCard[];
  levelAmount: number;
}

interface DrawnCard {
  rankSymbol: RankSymbol;
  action: LevelAction;
}

const useGameContextState = () => {
  const [CAmount, setCAmount] = useState<number>(0);
  const [DAmount, setDAmount] = useState<number>(0);
  const [HAmount, setHAmount] = useState<number>(0);
  const [SAmount, setSAmount] = useState<number>(0);

  const [winner, setWinner] = useState<CardSymbol>();

  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);

  const [levelAmount, setLevelAmount] = useState<number>(0);

  const setLevelAmountConditionally = (levelAmount: number) => {
    if (levelAmount < 11) {
      setLevelAmount(levelAmount);
    }
  };

  const currentLevel = useMemo(() => {
    return Math.min(...[CAmount, DAmount, HAmount, SAmount]) ?? 0;
  }, [CAmount, DAmount, HAmount, SAmount]);

  const incrementFnc = (value: number) =>
    value >= 0 && value < levelAmount - 1 ? value + 1 : 0;

  const increment = (symbol: CardSymbol) => {
    switch (symbol) {
      case "C":
        setCAmount(incrementFnc);
        if (CAmount === levelAmount - 1) setWinner("C");
        return;
      case "D":
        setDAmount(incrementFnc);
        if (DAmount === levelAmount - 1) setWinner("D");
        return;
      case "H":
        setHAmount(incrementFnc);
        if (HAmount === levelAmount - 1) setWinner("H");
        return;
      case "S":
        setSAmount(incrementFnc);
        if (SAmount === levelAmount - 1) setWinner("S");
        return;
    }
  };

  const decrementFnc = (value: number) =>
    value > 0 && value <= levelAmount - 1 ? value - 1 : 0;

  const decrement = (symbol: CardSymbol) => {
    switch (symbol) {
      case "C":
        setCAmount(decrementFnc);
        return;
      case "D":
        setDAmount(decrementFnc);
        return;
      case "H":
        setHAmount(decrementFnc);
        return;
      case "S":
        setSAmount(decrementFnc);
        return;
    }
  };

  const getCurrentLevelBySymbol = (symbol: CardSymbol) => {
    switch (symbol) {
      case "C":
        return CAmount;
      case "D":
        return DAmount;
      case "H":
        return HAmount;
      case "S":
        return SAmount;
    }
  };

  const storeData = useCallback(async () => {
    try {
      const gameData: GameData = {
        CAmount,
        DAmount,
        HAmount,
        SAmount,
        drawnCards,
        levelAmount,
      };
      await AsyncStorage.setItem(
        GAMEDATA_STORAGE_KEY,
        JSON.stringify(gameData),
      );
    } catch (e) {
      // saving error
    }
  }, [CAmount, DAmount, HAmount, SAmount, drawnCards, levelAmount]);

  useEffect(() => {
    if (CAmount > 0 || DAmount > 0 || HAmount > 0 || SAmount > 0) {
      void storeData();
    }
  }, [CAmount, DAmount, storeData, HAmount, SAmount, drawnCards, levelAmount]);

  const appendDrawnCard = (drawnCard: DrawnCard) => {
    setDrawnCards((cards) => [...cards, drawnCard]);
  };

  const loadGameState = (gameState: GameData) => {
    setCAmount(gameState.CAmount);
    setDAmount(gameState.DAmount);
    setHAmount(gameState.HAmount);
    setSAmount(gameState.SAmount);
    setDrawnCards(gameState.drawnCards);
    setLevelAmount(gameState.levelAmount);
  };

  const reset = () => {
    setCAmount(0);
    setDAmount(0);
    setSAmount(0);
    setHAmount(0);
    setDrawnCards([]);
    setWinner(undefined);
  };

  return {
    winner,
    levelAmount,
    drawnCards,
    appendDrawnCard,
    reset,
    setLevelAmount: setLevelAmountConditionally,
    getCurrentLevelBySymbol,
    currentLevel,
    increment,
    decrement,
    loadGameState,
  };
};

type IGameContext = ReturnType<typeof useGameContextState>;

const GameContext = createContext({} as IGameContext);

export const GameContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const value = useGameContextState();

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  return useContext(GameContext);
};
