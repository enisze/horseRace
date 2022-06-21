import React, { CSSProperties, FunctionComponent } from "react";

import { View } from "react-native";
import Card from "./Card";
import { RankSymbol } from "../types/RankSymbol.type";
import { map } from "lodash";
import tw from "twrnc";
import { useGameContext } from "./GameContext";

export const CardDeckComponent: FunctionComponent = () => {
  return (
    <View style={tw`flex flex-row justify-center items-end space-x-4`}>
      <Card rankSymbol={"AC"} />
      <Card rankSymbol={"AD"} />;
      <Card rankSymbol={"AH"} />;
      <Card rankSymbol={"AS"} />;
    </View>
  );
};
