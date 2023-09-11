import { FunctionComponent, PropsWithChildren } from "react";
import { Modal, ModalProps, View } from "react-native";

import { BackButton } from "./buttons/BackButton";
import { MainLayout } from "./MainLayout";

export type HorseRaceModalProps = PropsWithChildren<ModalProps> & {
  onClose: () => void;
  showBackButton?: boolean;
};

export const HorseRaceModal: FunctionComponent<HorseRaceModalProps> = ({
  visible,
  children,
  onClose,
  showBackButton = true,
  ...props
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      {...props}
      onRequestClose={onClose}
    >
      <MainLayout
        className={`m-auto flex items-center justify-center rounded-xl border border-blue-200 p-10 shadow-2xl shadow-black ${props.className}`}
      >
        {showBackButton && (
          <View className="absolute right-4 top-4">
            <BackButton darkBg={false} onPress={onClose} />
          </View>
        )}
        {children}
      </MainLayout>
    </Modal>
  );
};
