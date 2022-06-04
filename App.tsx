import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { CardDeckComponent } from "./libs/src/CardDeckComponent";

export default function App() {
  return (
    <View>
      <Text style={tw`text-black `}>testerino</Text>
      <CardDeckComponent />
    </View>
  );
}
