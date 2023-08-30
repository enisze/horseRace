import React, { FunctionComponent } from "react";

import { RankSymbol } from "../../types/RankSymbol.type";
import { getImage } from "../dataLists/imageList";
import CardImage from "./CardImage";

type CardProps = {
  rankSymbol: RankSymbol;
};

const Card: FunctionComponent<CardProps> = ({ rankSymbol }) => {
  return <CardImage source={getImage(rankSymbol)} />;
};

export default Card;
