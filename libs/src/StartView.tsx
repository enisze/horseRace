import React, { FunctionComponent, useState } from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { useGameContext } from './helpers/GameContext'
import tw from 'twrnc'

export const StartView: FunctionComponent = () => {
  const { levelAmount, setLevelAmount } = useGameContext()
  const [level, setLevel] = useState<string>('')
  const [showError, setShowError] = useState<boolean>(false)

  if (levelAmount) return null
  return (
    <View style={tw`p-20`}>
      <TextInput
        onChangeText={(text) => {
          setLevel(text)
        }}
        value={level}
        placeholder="Set Level"
        keyboardType="numeric"
      />
      <Button
        title="Set Level amount"
        onPress={() => {
          const numericLevel = Number(level)
          if (!isNaN(numericLevel)) {
            setLevelAmount(numericLevel)
            setShowError(false)
          } else {
            setShowError(true)
          }
        }}
      />
      {showError && (
        <Text style={tw`text-red-500`}>Please type in a number</Text>
      )}
    </View>
  )
}
