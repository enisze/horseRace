import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { MainCardSet } from "./libs/src/MainCardSet";
import { GameContextProvider } from "./libs/src/GameContext";
import { MainView } from "./libs/src/MainView";

export default function App() {
  return (
    <GameContextProvider>
      <MainView />
    </GameContextProvider>
  );
}
