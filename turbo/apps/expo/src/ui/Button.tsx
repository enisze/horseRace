import type { GestureResponderEvent } from "react-native";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  className?: string;
};

export const Button = ({ onPress, title, className }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className={`text-xl font-semibold text-blue-400 ${className}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
