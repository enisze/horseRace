import React, { FunctionComponent, PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

export type MainLayoutProps = PropsWithChildren<ViewProps>;

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <View className={`bg-blue-100 p-2 ${className}`} {...props}>
      {children}
    </View>
  );
};
