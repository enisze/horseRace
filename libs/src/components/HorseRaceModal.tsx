import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Modal, ModalProps, View } from 'react-native'
import { tw } from '../tailwind'
import { BackButton } from './BackButton'
import { MainLayout } from './MainLayout'

export type HorseRaceModalProps = PropsWithChildren<ModalProps> & {
  onClose: () => void
  showBackButton?: boolean
}

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
        style={[
          tw`border rounded flex justify-center items-center m-auto p-10 shadow-black shadow-2xl`,
          props.style,
        ]}
      >
        {showBackButton && (
          <View style={tw`top-4 left-4 absolute`}>
            <BackButton darkBg={false} onPress={onClose} />
          </View>
        )}
        {children}
      </MainLayout>
    </Modal>
  )
}
