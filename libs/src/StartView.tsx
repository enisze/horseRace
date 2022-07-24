import React, { FunctionComponent, useState } from 'react'
import { Linking, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import tw from 'twrnc'
import NativeAd from './ads/NativeAd'
import { GOOGLE_ADMOB_STARTVIEW_BANNER_ID } from './env.config'
import { useGameContext } from './helpers/GameContext'
import { NewGameModal } from './layouts/NewGameModal'

const paypalDonationURL =
  'https://www.paypal.com/donate/?hosted_button_id=Q7H2L2WCGZKVL'

const buttonStyle = tw`w-40 mt-10`

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
        buttonStyle={buttonStyle}
      />
      <Button title="Continue Game" buttonStyle={buttonStyle} />
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
