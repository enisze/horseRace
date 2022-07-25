import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { FunctionComponent, useState } from 'react'
import { Linking, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import tw from 'twrnc'
import NativeAd from './ads/NativeAd'
import { GAMEDATA_STORAGE_KEY, paypalDonationURL } from './constants'
import { GOOGLE_ADMOB_STARTVIEW_BANNER_ID } from './env.config'
import { useGameContext } from './helpers/GameContext'
import { NewGameModal } from './layouts/NewGameModal'

const buttonStyle = tw`w-40 mt-10`

export const StartView: FunctionComponent = () => {
  const { gameState, loadGameState, setGameState } = useGameContext()

  const [showModal, setShowModal] = useState(false)

  const donationsNavigate = () => {
    Linking.openURL(paypalDonationURL)
  }

  const getLastGamePlayedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(GAMEDATA_STORAGE_KEY)
      const gameData = jsonValue != null ? JSON.parse(jsonValue) : null
      loadGameState(gameData)
    } catch (error: any) {}
  }

  if (gameState !== 'off') return null

  return (
    <View
      style={tw`flex flex-col justify-center items-center bg-blue-100 h-full`}
    >
      <Button
        title="Start Game"
        onPress={() => {
          setShowModal(true)
        }}
        buttonStyle={buttonStyle}
      />
      <Button
        title="Continue Game"
        buttonStyle={buttonStyle}
        onPress={getLastGamePlayedData}
      />
      <Button
        title={'Support me '}
        onPress={donationsNavigate}
        type="solid"
        icon={
          <Icon
            color={'red'}
            tvParallaxProperties={undefined}
            name="heart"
            type="entypo"
          />
        }
        buttonStyle={buttonStyle}
        iconRight
      />
      <NewGameModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />

      <View style={tw`flex items-center `}>
        <NativeAd id={GOOGLE_ADMOB_STARTVIEW_BANNER_ID} />
      </View>
    </View>
  )
}
