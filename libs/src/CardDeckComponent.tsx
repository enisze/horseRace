import React, { CSSProperties, FunctionComponent } from "react";

import tw from "twrnc";
import { View, Text, Image } from "react-native";

export const CardDeckComponent: FunctionComponent = () => {
  const style: CSSProperties = { border: "solid", width: "100%" };
  return (
    <View>
      <Text style={tw`text-black`}>tessdwt</Text>
      <CardDeckComponent />
    </View>
  );
};
