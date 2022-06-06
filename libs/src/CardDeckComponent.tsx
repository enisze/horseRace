import React, { CSSProperties, FunctionComponent } from "react";

import { View } from "react-native";
import Card from "./Card";
import { RankSymbol } from "../types/RankSymbol.type";
import { map } from "lodash";
import tw from "twrnc";

export const CardDeckComponent: FunctionComponent = () => {
  const startingCards: RankSymbol[] = ["AC", "AD", "AH", "AS"];
  return (
    <View style={tw`flex flex-row justify-center items-end`}>
      {map(startingCards, (card) => {
        return <Card rankSymbol={card} />;
      })}
    </View>
  );
};
