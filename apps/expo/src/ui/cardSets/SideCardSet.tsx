import { FunctionComponent } from "react";
import { View } from "react-native";
import { useAtomValue } from "jotai";

import { SIDE_CARD_SET_GAP } from "~//constants";
import { levelAtom } from "~/contexts/GameContext";
import { gapStyles } from "~/styles/gapStyles.styles";
import { RandomCardAutomated } from "~/ui/cards/RandomCardAutomated";

export const SideCardSet: FunctionComponent = () => {
  const levelAmount = useAtomValue(levelAtom);

  const styles = gapStyles(SIDE_CARD_SET_GAP, "column");

  return (
    <View className="flex flex-col">
      {[...Array<number>(levelAmount)].map((e, i) => (
        <View style={styles.child} key={i}>
          <RandomCardAutomated level={levelAmount - i} />
        </View>
      ))}
    </View>
  );
};
