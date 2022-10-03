import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import NativeAd from '../ads/NativeAd'
import { GAMEDATA_STORAGE_KEY } from '../constants'
import { useGameContext } from '../contexts/GameContext'
import { GOOGLE_ADMOB_STARTVIEW_BANNER_ID } from '../env.config'
import { NewGameModal } from '../modals/NewGameModal'
import { tw } from '../tailwind'

import { useNavigation } from '@react-navigation/native'
import { t } from 'i18next'
import { MainLayout } from '../components/MainLayout'

const buttonStyle = tw`w-40 mt-10`

export const StartView: FunctionComponent = () => {
  const { loadGameState, reset } = useGameContext()

  const [showModal, setShowModal] = useState(false)

  const { navigate } = useNavigation()

  const getLastGamePlayedData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(GAMEDATA_STORAGE_KEY)
      const gameData = jsonValue != null ? JSON.parse(jsonValue) : null
      loadGameState(gameData)
    } catch (error: any) {}
  }

  return (
    <MainLayout>
      <View style={tw`flex flex-col justify-center items-center h-full`}>
        <Button
          title={t('game.start')}
          onPress={() => {
            setShowModal(true)
          }}
          buttonStyle={buttonStyle}
        />
        <Button
          title={t('game.continue')}
          buttonStyle={buttonStyle}
          onPress={() => {
            getLastGamePlayedData()
            navigate('MainView')
          }}
        />
        <Button
          title={t('statistics')}
          onPress={() => navigate('StatisticsView')}
          type="solid"
          buttonStyle={buttonStyle}
          iconRight
        />
        <Button
          title={t('game.session')}
          onPress={() => navigate('SessionView')}
          type="solid"
          buttonStyle={buttonStyle}
          iconRight
        />
        <NewGameModal
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          onSubmit={() => {
            reset()
            navigate('MainView')
          }}
        />

        <View style={tw`flex items-center `}>
          <NativeAd id={GOOGLE_ADMOB_STARTVIEW_BANNER_ID} />
        </View>
      </View>
    </MainLayout>
  )
}
