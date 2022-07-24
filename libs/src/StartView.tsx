import React, { FunctionComponent, useState } from 'react'
import { Linking, View } from 'react-native'
import { Button } from 'react-native-elements'
import tw from 'twrnc'
import { useGameContext } from './helpers/GameContext'
import { NewGameModal } from './layouts/NewGameModal'

const paypalDonationURL =
  'https://www.paypal.com/donate/?hosted_button_id=Q7H2L2WCGZKVL'

const buttonStyle = tw`w-40 pt-5`

export const StartView: FunctionComponent = () => {
  const { levelAmount } = useGameContext()
  const [showModal, setShowModal] = useState(false)

  const donationsNavigate = () => {
    Linking.openURL(paypalDonationURL)
  }

  if (levelAmount) return null

  return (
    <View style={tw`flex flex-col justify-center items-center pt-20`}>
      <Button
        title="Start Game"
        onPress={() => {
          setShowModal(true)
        }}
        style={buttonStyle}
      />
      <Button title="Continue Game" style={buttonStyle} />
      <Button
        title="Support Me <3"
        onPress={donationsNavigate}
        style={buttonStyle}
      />
      <NewGameModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </View>
  )
}
