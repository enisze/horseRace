import React, { FunctionComponent } from "react";
import { View } from "react-native";

import { RankSymbol } from "../../types/RankSymbol.type";
import Card from "../cards/Card";
import { SIDE_CARD_SET_GAP } from "../constants";
import { useGetCurrentLevelBySymbol } from "../contexts/GameContext";
import { getSymbolFromRankSymbol } from "../helpers/getSymbolFromRankSymbol";
import { useGetCardWidthAndHeight } from "../hooks/useGetCardWidthAndHeight";
import { gapStyles } from "../styles/gapStyles.styles";

export const MainCardSet: FunctionComponent = () => {
  //TODO: Add this somehow
  const styles = gapStyles(12, "row");

  const keys: RankSymbol[] = ["AC", "AD", "AS", "AH"];

  return (
    <View
      className={`flex flex-row items-end`}
      //TODO: Add this
      style={styles.container}
      //   ...{ marginBottom: -SIDE_CARD_SET_GAP / 2 },
    >
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

  const newHeight = (height + SIDE_CARD_SET_GAP) * amount;

  return (
    <View style={{ height: newHeight }} key={rankSymbol}>
      <Card rankSymbol={rankSymbol} />
    </View>
  );
};
