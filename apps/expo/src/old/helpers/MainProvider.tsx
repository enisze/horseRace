import React, {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useEffect,
} from "react";
import { Platform } from "react-native";

const MainProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const test = useCallback(async () => {
    if (Platform.OS !== "web") {
      // await setTestDeviceIDAsync("EMULATOR");
    }
  }, []);

  useEffect(() => {
    void test();
  }, [test]);

  return <>{children}</>;
};

export default MainProvider;
