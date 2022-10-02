import React, { FunctionComponent, useEffect, useState } from 'react'
import { View } from 'react-native'
import NativeAd from '../ads/NativeAd'
import Card from '../cards/Card'
import { HorseRaceButton } from '../components/HorseRaceButton'
import { HorseRaceModal } from '../components/HorseRaceModal'
import { Paragraph } from '../components/Paragraph'
import { GOOGLE_ADMOB_MODAL_BANNER_ID } from '../env.config'
import { useGameContext } from '../helpers/GameContext'
import { tw } from '../tailwind'

export const WinnerModal: FunctionComponent = () => {
  const { winner, reset } = useGameContext()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (winner) {
      setShowModal(true)
    }
  }, [winner])

  return (
    <HorseRaceModal
      visible={showModal}
      onClose={() => setShowModal(false)}
      showBackButton={false}
    >
      <Paragraph>Winner:</Paragraph>

      {winner && <Card rankSymbol={`A${winner}`} />}
      <View style={tw`border rounded p-2 shadow-black shadow-2xl bg-green-200`}>
        <HorseRaceButton
          onPress={() => {
            setShowModal(false)
            reset()
          }}
        >
          <Paragraph>Reset </Paragraph>
        </HorseRaceButton>
      </View>
      <NativeAd id={GOOGLE_ADMOB_MODAL_BANNER_ID} />
    </HorseRaceModal>
  )
}
