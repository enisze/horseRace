import React, { FunctionComponent, useState } from 'react'
import { Modal, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import tw from 'twrnc'
import { useGameContext } from '../helpers/GameContext'

export const NewGameModal: FunctionComponent<{
  showModal: boolean
  closeModal: () => void
}> = ({ showModal, closeModal }) => {
  const { setLevelAmount, reset, setGameState, gameState } = useGameContext()
  const [level, setLevel] = useState<string>('')
  const [showError, setShowError] = useState<boolean>(false)

  return (
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={() => setGameState('off')}
      transparent={true}
    >
      <View
        style={tw`border rounded flex justify-center items-center m-auto p-10 bg-blue-100 shadow-black shadow-2xl`}
      >
        <View style={tw`w-40 flex `}>
          <Input
            autoCompleteType={'off'}
            onChangeText={(text) => {
              reset()
              setLevel(text)
            }}
            value={level}
            placeholder="Set Level"
            keyboardType="numeric"
            errorMessage={
              showError ? 'Level must be a number below 10' : undefined
            }
          />
        </View>
        <Button
          onPress={() => {
            const numericLevel = Number(level)
            if (!isNaN(numericLevel) && numericLevel < 11) {
              setLevelAmount(numericLevel)
              closeModal()
              setGameState('playing')
              setShowError(false)
            } else {
              setShowError(true)
            }
          }}
          title="Set level"
          buttonStyle={tw`w-40`}
        />
      </View>
    </Modal>
  )
}