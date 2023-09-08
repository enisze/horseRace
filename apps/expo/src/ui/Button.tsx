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
    <PaperButton onPress={onPress}>
      <Text className={`text-xl font-semibold text-blue-400 ${className}`}>
        {title}
      </Text>
    </PaperButton>
  );
};
