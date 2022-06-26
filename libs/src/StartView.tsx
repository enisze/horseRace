import { isNumber } from 'lodash'
import React, { FunctionComponent, useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import { useGameContext } from './GameContext'

export const StartView: FunctionComponent = () => {
  const { levelAmount, setLevelAmount } = useGameContext()
  const [level, setLevel] = useState<string>('')

  if (levelAmount) return null
  return (
    <View>
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
          if (!isNaN(numericLevel) && isNumber(numericLevel)) {
            setLevelAmount(numericLevel)
          }
        }}
      />
    </View>
  )
}
