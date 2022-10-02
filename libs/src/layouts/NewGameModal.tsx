import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { HorseRaceModal } from '../components/HorseRaceModal'
import { useGameContext } from '../helpers/GameContext'
import { tw } from '../tailwind'

export const NewGameModal: FunctionComponent<{
  showModal: boolean
  closeModal: () => void
  onSubmit: () => void
}> = ({ showModal, closeModal, onSubmit }) => {
  const { setLevelAmount, reset } = useGameContext()
  const [level, setLevel] = useState<string>('')
  const [showError, setShowError] = useState<boolean>(false)

  return (
    <HorseRaceModal visible={showModal} onClose={closeModal}>
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
          inputContainerStyle={tw`h-14`}
        />
      </View>
      <Button
        onPress={() => {
          const numericLevel = Number(level)
          if (!isNaN(numericLevel) && numericLevel < 11) {
            setLevelAmount(numericLevel)
            closeModal()
            setShowError(false)
            onSubmit()
          } else {
            setShowError(true)
          }
        }}
        title="Set level"
        buttonStyle={tw`w-40`}
      />
    </HorseRaceModal>
  )
}
