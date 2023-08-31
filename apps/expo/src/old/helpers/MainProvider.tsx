import React, { FunctionComponent, PropsWithChildren, useEffect } from "react";
import { Platform } from "react-native";

const MainProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const test = async () => {
    if (Platform.OS !== "web") {
      // await setTestDeviceIDAsync("EMULATOR");
    }
  };

  useEffect(() => {
    test();
  }, [test]);

  return <>{children}</>;
};

export default MainProvider;
