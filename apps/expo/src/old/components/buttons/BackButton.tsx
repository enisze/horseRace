import React from "react";
import { Icon } from "react-native-elements";

import { HorseRaceButton } from "./HorseRaceButton";

export const BackButton: React.FunctionComponent<{
  darkBg?: boolean;
  onPress: () => void;
}> = ({ darkBg = true, onPress }) => {
  return (
    <HorseRaceButton onPress={onPress}>
      <Icon
        type="entypo"
        name="arrow-long-left"
        color={darkBg ? "#fff" : "#2089dc"}
      />
    </HorseRaceButton>
  );
};
