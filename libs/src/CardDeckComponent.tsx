import React, { CSSProperties, FunctionComponent } from "react";

import tw from "twrnc";
import { View, Text, Image } from "react-native";
import Card from "./Card";

export const CardDeckComponent: FunctionComponent = () => {
  return (
    <View>
      <Text style={tw`text-black`}>tessdwt</Text>
      <Card rankSymbol="2H" />
    </View>
  );
};
