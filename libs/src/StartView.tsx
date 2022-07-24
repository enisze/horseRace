import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import tw from 'twrnc'
import NativeAd from './ads/NativeAd'
import { GOOGLE_ADMOB_STARTVIEW_BANNER_ID } from './env.config'
import { useGameContext } from './helpers/GameContext'

export const StartView: FunctionComponent = () => {
  const { levelAmount, setLevelAmount } = useGameContext()
  const [level, setLevel] = useState<string>('')
  const [showError, setShowError] = useState<boolean>(false)

  if (levelAmount) return null
  return (
    <View style={tw`p-20`}>
      <Input
        autoCompleteType={'off'}
        onChangeText={(text) => {
          setLevel(text)
        }}
        value={level}
        placeholder="Set Level"
        keyboardType="numeric"
        errorMessage={showError ? 'Level must be a number below 10' : undefined}
        style={tw`h-6`}
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

      <View style={tw`flex items-center `}>
        <NativeAd id={GOOGLE_ADMOB_STARTVIEW_BANNER_ID} />
      </View>
    </View>
  )
}
