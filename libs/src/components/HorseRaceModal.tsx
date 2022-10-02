import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Modal, ModalProps } from 'react-native'
import { tw } from '../tailwind'
import { MainLayout } from './MainLayout'

export type HorseRaceModalProps = PropsWithChildren<ModalProps>

export const HorseRaceModal: FunctionComponent<HorseRaceModalProps> = ({
  visible,
  children,
  ...props
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      {...props}
    >
      <MainLayout
        style={tw`border rounded flex justify-center items-center m-auto p-10 shadow-black shadow-2xl`}
      >
        {children}
      </MainLayout>
    </Modal>
  )
}
