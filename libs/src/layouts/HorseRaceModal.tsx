import React, { FunctionComponent, useEffect, useState } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import tw from 'twrnc'
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
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false)
      }}
    >
      <View
        style={tw`border rounded flex justify-center items-center m-auto p-10`}
      >
        <Text>Winner:</Text>

        {winner && <Card rankSymbol={`A${winner}`} />}
        <View style={tw`border rounded p-2`}>
          <Pressable
            onPress={() => {
              setShowModal(false)
              reset()
            }}
          >
            <Text>Reset </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}
