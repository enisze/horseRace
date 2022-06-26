import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { MainCardSet } from "./MainCardSet";
import { SideCardSet } from "./SideCardSet";
import tw from "twrnc";

export const MainView: FunctionComponent<{}> = () => {
  return (
    <View style={tw`flex`}>
      <MainCardSet />
      <SideCardSet />
    </View>
  );
};
