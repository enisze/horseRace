import { FunctionComponent } from "react";
import { View } from "react-native";
import { useAtomValue } from "jotai";

import { getSymbolFromRankSymbol } from "~//helpers/getSymbolFromRankSymbol";
import { SIDE_CARD_SET_GAP } from "~/constants";
import { levelAtom, useGetCurrentLevelBySymbol } from "~/contexts/GameContext";
import { useGetCardWidthAndHeight } from "~/hooks/useGetCardWidthAndHeight";
import { gapStyles } from "~/styles/gapStyles.styles";
import { RankSymbol } from "~/types/RankSymbol.type";
import Card from "~/ui/cards/Card";

const keys: RankSymbol[] = ["AC", "AD", "AS", "AH"];

const styles = gapStyles(12, "row");

export const MainCardSet = () => {
  return (
    <View className={`flex flex-row items-end`} style={styles.container}>
      {keys.map((key, idx) => {
        return (
          <View style={styles.child} key={idx}>
            <CardWithCurrentPosition rankSymbol={key} />
          </View>
        );
      })}
    </View>
  );
};

const CardWithCurrentPosition: FunctionComponent<{
  rankSymbol: RankSymbol;
}> = ({ rankSymbol }) => {
  const { height } = useGetCardWidthAndHeight();
  const symbol = getSymbolFromRankSymbol(rankSymbol);
  const offset = 1;

  const amount = useGetCurrentLevelBySymbol(symbol) + offset;

  const level = useAtomValue(levelAtom);

  const newHeight =
    (height + SIDE_CARD_SET_GAP) * (amount > level ? level : amount);

  return (
    <View style={{ height: newHeight }} key={rankSymbol}>
      <Card rankSymbol={rankSymbol} />
    </View>
  );
};
