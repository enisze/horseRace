import { Button } from '@rneui/themed'
import React, { FunctionComponent, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import tw from 'twrnc'
import { useGameContext } from './helpers/GameContext'

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
        style={tw`border-rounded h-6`}
      />
      <Button
        onPress={() => {
          const numericLevel = Number(level)
          if (!isNaN(numericLevel)) {
            setLevelAmount(numericLevel)
            setShowError(false)
          } else {
            setShowError(true)
          }
        }}
      >
        <View
          style={tw`w-full justify-center items-center flex rounded bg-blue-200 h-6`}
        >
          <Text>Set level</Text>
        </View>
      </Button>
      {showError && (
        <Text style={tw`text-red-500`}>Please type in a number</Text>
      )}
    </View>
  )
}
