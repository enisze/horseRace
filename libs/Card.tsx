import { FunctionComponent } from "react";
import { Image } from "react-native";
import tw from "twrnc";

interface CardProps {}

const Card: FunctionComponent<CardProps> = () => {
  return (
    <>
      <div style={tw`text-black`}>test</div>
      <Image
        source={{ height: 50, width: 50, uri: "../assets/adaptive-icon.png" }}
      />
    </>
  );
};

export default Card;
