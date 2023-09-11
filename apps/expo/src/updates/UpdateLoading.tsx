import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const UpdateLoading = () => {
  return (
    <>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </>
  );
};
