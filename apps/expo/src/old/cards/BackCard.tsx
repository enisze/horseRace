import React, { FunctionComponent } from "react";
import { View } from "react-native";

import CardImage from "./CardImage";

interface BackCardProps {
  onClick?: () => void;
}

const BackCard: FunctionComponent<BackCardProps> = ({ onClick }) => {
  return (
    <View onTouchStart={onClick}>
      <CardImage
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        source={require("../../../assets/cards/back/cardBackBlue.png")}
      />
    </View>
  );
};

export default BackCard;
