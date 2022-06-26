import React, { FunctionComponent } from "react";

import { View } from "react-native";
import Card from "./Card";
import tw from "twrnc";
import BackCard from "./BackCard";

export const MainCardSet: FunctionComponent = () => {
  return (
    <View style={tw`flex flex-row justify-center items-end gap-x-4`}>
      <Card rankSymbol={"AC"} />
      <Card rankSymbol={"AD"} />
      <Card rankSymbol={"AH"} />
      <Card rankSymbol={"AS"} />
    </View>
  );
};
