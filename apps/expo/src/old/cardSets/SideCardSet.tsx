import React, { FunctionComponent } from "react";
import { View } from "react-native";

import { RandomCardAutomated } from "../cards/RandomCardAutomated";
import { SIDE_CARD_SET_GAP } from "../constants";
import { useGameContext } from "../contexts/GameContext";
import { gapStyles } from "../styles/gapStyles.styles";

export const SideCardSet: FunctionComponent = () => {
  const { levelAmount } = useGameContext();

  const styles = gapStyles(SIDE_CARD_SET_GAP, "column");

  //TODO: Add this
  //...styles.container }}>
  return (
    <View className="flex flex-col">
      {[...Array(levelAmount)].map((e, i) => (
        <View style={styles.child} key={i}>
          <RandomCardAutomated level={levelAmount - i} />
        </View>
      ))}
    </View>
  );
};
