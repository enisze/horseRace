import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
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
  const [level, setLevel] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  return (
    <HorseRaceModal visible={showModal} onClose={closeModal}>
      <View className="flex w-40">
        <Input
          onChangeText={(text) => {
            reset();
            setLevel(text);
          }}
          value={level}
          placeholder="Set Level"
          keyboardType="numeric"
          errorMessage={
            showError ? "Level must be a number below 10" : undefined
          }
        />
      </View>
      <Button
        onPress={() => {
          const numericLevel = Number(level);
          if (!isNaN(numericLevel) && numericLevel < 11) {
            setLevelAmount(numericLevel);
            closeModal();
            setShowError(false);
            onSubmit();
          } else {
            setShowError(true);
          }
        }}
        title="Set level"
        className="w-40"
      />
    </HorseRaceModal>
  );
};
