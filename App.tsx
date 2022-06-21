import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { CardDeckComponent } from "./libs/src/CardDeckComponent";
import { GameContextProvider } from "./libs/src/GameContext";

export default function App() {
  return (
    <GameContextProvider>
      <View>
        <Text style={tw`text-black `}>testerino</Text>
        <CardDeckComponent />
      </View>
    </GameContextProvider>
  );
}
