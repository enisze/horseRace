import { signInAnonymously } from 'firebase/auth'
import { ref, set } from 'firebase/database'
import React, { FunctionComponent, useState } from 'react'
import { Linking, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import tw from 'twrnc'
import { auth, db2 } from '../database/Firebase'
import NativeAd from './ads/NativeAd'
import { paypalDonationURL } from './constants'
import { GOOGLE_ADMOB_STARTVIEW_BANNER_ID } from './env.config'
import { useGameContext } from './helpers/GameContext'
import { useSessionContext } from './helpers/SessionContext'
import { useGetLastGamePlayedData } from './hooks/useGetLastGamePlayed'
import { NewGameModal } from './layouts/NewGameModal'

const buttonStyle = tw`w-40 mt-10`

const GameKey = 'Start'

export const StartView: FunctionComponent = () => {
  const { gameState } = useGameContext()
  const { setGameId } = useSessionContext()

  const [showModal, setShowModal] = useState(false)

  const donationsNavigate = () => {
    Linking.openURL(paypalDonationURL)
  }

  const getLastGamePlayedData = useGetLastGamePlayedData()

  const authenticate = async () => {
    signInAnonymously(auth)
      .then(({ user }) => {
        const b = ref(db2, `game/${GameKey}/users/${user.uid}`)
        const username = 'Enis'

        setGameId(GameKey)
        set(b, username)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ...
      })
  }

  if (gameState !== 'off') return null

  return (
    <View
      style={tw`flex flex-col justify-center items-center bg-blue-100 h-full`}
    >
      <Button
        title="Start session"
        onPress={() => {
          authenticate()

          setShowModal(true)
        }}
        buttonStyle={buttonStyle}
      />

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
