import React from "react";
import { GameContextProvider } from "./libs/src/GameContext";
import { MainView } from "./libs/src/MainView";
import { StartView } from "./libs/src/StartView";

export default function App() {
  return (
    <GameContextProvider>
      <StartView />
      <MainView />
    </GameContextProvider>
  );
}
