import { FunctionComponent } from "react";
import { TextInput } from "react-native";

export interface InputProps {}

export const Input: FunctionComponent<InputProps> = ({}) => {
  return (
    <TextInput
      className="mb-2 rounded bg-white/10 p-2 text-white"
      placeholderTextColor="rgba(255, 255, 255, 0.5)"
      value={content}
      onChangeText={setContent}
      placeholder="Content"
    />
  );
  {
    error?.data?.zodError?.fieldErrors.content && (
      <Text className="mb-2 text-red-500">
        {error.data.zodError.fieldErrors.content}
      </Text>
    );
  }
};
