import { FunctionComponent } from "react";
import { Image } from "react-native";
import tw from "twrnc";

interface CardProps {}

const staticImage = require("../assets/cards/2C.png");

const Card: FunctionComponent<CardProps> = () => {
  return <Image source={staticImage} style={tw`h-23 w-15 `} />;
};

export default Card;
