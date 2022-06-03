import React, { CSSProperties, FunctionComponent } from "react";

import tw from "twrnc";
import { View, Text, Image } from "react-native";

const staticImage = require("../assets/cards/2C.png");

export const CardDeckComponent: FunctionComponent = () => {
  const style: CSSProperties = { border: "solid", width: "100%" };
  return (
    <View>
      <Text style={tw`text-black`}>tessdwt</Text>
      <Image source={staticImage} style={tw`h-23 w-15 `} />
    </View>
  );
};
