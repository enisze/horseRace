import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";
import { Icon, Slider } from "react-native-elements";
import { Text } from "react-native-paper";
import { useSetAtom } from "jotai";

import { Button } from "../../ui/Button";
import { HorseRaceModal } from "../components/HorseRaceModal";
import { levelAtom, useResetGame } from "../contexts/GameContext";

export const NewGameModal: FunctionComponent<{
  showModal: boolean;
  closeModal: () => void;
  onSubmit: () => void;
}> = ({ showModal, closeModal, onSubmit }) => {
  const setLevelAmount = useSetAtom(levelAtom);

  const reset = useResetGame();
  const [level, setLevel] = useState<number>(5);

  return (
    <HorseRaceModal visible={showModal} onClose={closeModal}>
      <View className="flex w-40 pb-2">
        <Slider
          value={level}
          onValueChange={setLevel}
          maximumValue={10}
          minimumValue={1}
          step={1}
          allowTouchTrack
          trackStyle={{ height: 5, backgroundColor: "transparent" }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon
                name="circle"
                type="material"
                size={15}
                reverse
                containerStyle={{ bottom: 15, right: 15 }}
              />
            ),
          }}
        />
        <Text className="text-center text-white">{"Level: " + level}</Text>
      </View>
      <Button
        onPress={() => {
          reset();
          closeModal();
          setLevelAmount(level);
          onSubmit();
        }}
        title="Start Game"
        className="w-40"
      />
    </HorseRaceModal>
  );
};
