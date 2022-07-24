import React, { FunctionComponent, useState } from 'react'
import { Modal, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import tw from 'twrnc'
import { useGameContext } from '../helpers/GameContext'

export const NewGameModal: FunctionComponent<{
  showModal: boolean
  closeModal: () => void
}> = ({ showModal, closeModal }) => {
  const { levelAmount, setLevelAmount } = useGameContext()
  const [level, setLevel] = useState<string>('')
  const [showError, setShowError] = useState<boolean>(false)

  if (levelAmount) return null

  return (
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={closeModal}
      transparent={true}
    >
      <View
        style={tw`border rounded flex justify-center items-center m-auto p-10 bg-blue-100 shadow-black shadow-2xl`}
      >
        <Input
          autoCompleteType={'off'}
          onChangeText={(text) => {
            setLevel(text)
          }}
          value={level}
          placeholder="Set Level"
          keyboardType="numeric"
          errorMessage={
            showError ? 'Level must be a number below 10' : undefined
          }
          style={tw`border-rounded h-6`}
        />
        <Button
          onPress={() => {
            const numericLevel = Number(level)
            if (!isNaN(numericLevel) && numericLevel < 11) {
              setLevelAmount(numericLevel)
              setShowError(false)
            } else {
              setShowError(true)
            }
          }}
          style={tw`w-full justify-center items-center flex rounded`}
          title="Set level"
          buttonStyle={tw`w-full`}
        />
      </View>
    </Modal>
  )
}
