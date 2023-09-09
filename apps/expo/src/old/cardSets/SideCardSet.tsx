import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { useAtomValue } from "jotai";

import { RandomCardAutomated } from "../cards/RandomCardAutomated";
import { SIDE_CARD_SET_GAP } from "../constants";
import { levelAtom } from "../contexts/GameContext";
import { gapStyles } from "../styles/gapStyles.styles";

export const SideCardSet: FunctionComponent = () => {
  const levelAmount = useAtomValue(levelAtom);

  const styles = gapStyles(SIDE_CARD_SET_GAP, "column");

  return (
    <View className="flex flex-col pl-2">
      {[...Array<number>(levelAmount)].map((e, i) => (
        <View style={styles.child} key={i}>
          <RandomCardAutomated level={levelAmount - i} />
        </View>
      ))}
    </View>
  );
};
