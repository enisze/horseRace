/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RankSymbol } from "../../types/RankSymbol.type";

const spades = {
  "2S": require("../../../assets/cards/spade/cardSpades_2.png"),
  "3S": require("../../../assets/cards/spade/cardSpades_3.png"),
  "4S": require("../../../assets/cards/spade/cardSpades_4.png"),
  "5S": require("../../../assets/cards/spade/cardSpades_5.png"),
  "6S": require("../../../assets/cards/spade/cardSpades_6.png"),
  "7S": require("../../../assets/cards/spade/cardSpades_7.png"),
  "8S": require("../../../assets/cards/spade/cardSpades_8.png"),
  "9S": require("../../../assets/cards/spade/cardSpades_9.png"),
  TS: require("../../../assets/cards/spade/cardSpades_10.png"),
  JS: require("../../../assets/cards/spade/cardSpades_J.png"),
  QS: require("../../../assets/cards/spade/cardSpades_Q.png"),
  KS: require("../../../assets/cards/spade/cardSpades_K.png"),
  AS: require("../../../assets/cards/spade/cardSpades_A.png"),
};

const hearts = {
  "2H": require("../../../assets/cards/heart/cardHearts_2.png"),
  "3H": require("../../../assets/cards/heart/cardHearts_3.png"),
  "4H": require("../../../assets/cards/heart/cardHearts_4.png"),
  "5H": require("../../../assets/cards/heart/cardHearts_5.png"),
  "6H": require("../../../assets/cards/heart/cardHearts_6.png"),
  "7H": require("../../../assets/cards/heart/cardHearts_7.png"),
  "8H": require("../../../assets/cards/heart/cardHearts_8.png"),
  "9H": require("../../../assets/cards/heart/cardHearts_9.png"),
  TH: require("../../../assets/cards/heart/cardHearts_10.png"),
  JH: require("../../../assets/cards/heart/cardHearts_J.png"),
  QH: require("../../../assets/cards/heart/cardHearts_Q.png"),
  KH: require("../../../assets/cards/heart/cardHearts_K.png"),
  AH: require("../../../assets/cards/heart/cardHearts_A.png"),
};

const diamonds = {
  "2D": require("../../../assets/cards/diamond/cardDiamonds_2.png"),
  "3D": require("../../../assets/cards/diamond/cardDiamonds_3.png"),
  "4D": require("../../../assets/cards/diamond/cardDiamonds_4.png"),
  "5D": require("../../../assets/cards/diamond/cardDiamonds_5.png"),
  "6D": require("../../../assets/cards/diamond/cardDiamonds_6.png"),
  "7D": require("../../../assets/cards/diamond/cardDiamonds_7.png"),
  "8D": require("../../../assets/cards/diamond/cardDiamonds_8.png"),
  "9D": require("../../../assets/cards/diamond/cardDiamonds_9.png"),
  TD: require("../../../assets/cards/diamond/cardDiamonds_10.png"),
  JD: require("../../../assets/cards/diamond/cardDiamonds_J.png"),
  QD: require("../../../assets/cards/diamond/cardDiamonds_Q.png"),
  KD: require("../../../assets/cards/diamond/cardDiamonds_K.png"),
  AD: require("../../../assets/cards/diamond/cardDiamonds_A.png"),
};

const clubs = {
  "2C": require("../../../assets/cards/club/cardClubs_2.png"),
  "3C": require("../../../assets/cards/club/cardClubs_3.png"),
  "4C": require("../../../assets/cards/club/cardClubs_4.png"),
  "5C": require("../../../assets/cards/club/cardClubs_5.png"),
  "6C": require("../../../assets/cards/club/cardClubs_6.png"),
  "7C": require("../../../assets/cards/club/cardClubs_7.png"),
  "8C": require("../../../assets/cards/club/cardClubs_8.png"),
  "9C": require("../../../assets/cards/club/cardClubs_9.png"),
  TC: require("../../../assets/cards/club/cardClubs_10.png"),
  JC: require("../../../assets/cards/club/cardClubs_J.png"),
  QC: require("../../../assets/cards/club/cardClubs_Q.png"),
  KC: require("../../../assets/cards/club/cardClubs_K.png"),
  AC: require("../../../assets/cards/club/cardClubs_A.png"),
};

const imageList = {
  ...clubs,
  ...diamonds,
  ...spades,
  ...hearts,
};

export const getImage = (rankSymbol: RankSymbol) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return imageList[rankSymbol];
};
