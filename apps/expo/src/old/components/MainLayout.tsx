import { FunctionComponent, PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

export type MainLayoutProps = PropsWithChildren<ViewProps>;

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <View className={`bg-blue-900 p-2 text-white ${className}`} {...props}>
      {children}
    </View>
  );
};
