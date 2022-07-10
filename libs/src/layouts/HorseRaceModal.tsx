import React, { FunctionComponent, useEffect, useState } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import Card from '../cards/Card'
import { useGameContext } from '../helpers/GameContext'

export const HorseRaceModal: FunctionComponent = () => {
  const { winner, reset } = useGameContext()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (winner) {
      setShowModal(true)
    }
  }, [winner])

  return (
    <View>
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false)
        }}
      >
        <View>
          <Text>Winner:</Text>

          {winner && <Card rankSymbol={`A${winner}`} />}
          <Pressable
            onPress={() => {
              setShowModal(false)
              reset()
            }}
          >
            <Text>Reset </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}
