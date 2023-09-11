import { useAtomValue } from "jotai";

import { SIDE_CARD_SET_GAP } from "~/constants";
import { levelAtom } from "~/contexts/GameContext";
import { useDimensions } from "./useDimensions";

export const useGetCardWidthAndHeight = () => {
  const levelAmount = useAtomValue(levelAtom);
  const { width, height } = useDimensions();

  let maxCardHeight = 0;
  const buffer = levelAmount + 1;
  const adOffset = 200;
  const offset = SIDE_CARD_SET_GAP * buffer + adOffset;

  if (levelAmount) {
    maxCardHeight = (height - offset) / buffer;
  }

  let cardHeight = maxCardHeight;
  let cardWidth = cardHeight / 1.55;

  if (cardWidth * 5 > width) {
    cardWidth = width / 6;
    cardHeight = cardWidth * 1.54;
  }

  return { width: cardWidth, height: cardHeight };
};
