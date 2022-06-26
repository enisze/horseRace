import { isNumber, noop } from 'lodash'
import React, { FunctionComponent, useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import { useGameContext } from './GameContext'

export const StartView: FunctionComponent = () => {
  const { levelAmount, setLevelAmount } = useGameContext()
  const [level, setLevel] = useState<string>()

  console.log(levelAmount)

  if (levelAmount) return null
  return (
    <View>
      <TextInput
        onChangeText={() => setLevel(level)}
        value={level}
        placeholder="Set Level"
        keyboardType="numeric"
      />
      <Button
        title="Set Level amount"
        onPress={() => {
          const numericLevel = Number(level)
          if (isNumber(numericLevel)) {
            console.log(numericLevel)
            setLevelAmount(numericLevel)
          }
        }}
      />
    </View>
  )
}
