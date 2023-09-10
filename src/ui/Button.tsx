import type { GestureResponderEvent } from "react-native";
import { Text } from "react-native";
import { Button as PaperButton } from "react-native-paper";

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  className?: string;
}

export const Button = ({ onPress, title, className }: Props) => {
  return (
    <PaperButton
      onPress={onPress}
      mode="outlined"
      className={`m-2 w-8/12 px-3`}
    >
      <Text className={`text-xl font-semibold text-blue-200 ${className}`}>
        {title}
      </Text>
    </PaperButton>
  );
};
