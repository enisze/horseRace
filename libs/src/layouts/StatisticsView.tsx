import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { MainLayout } from '../components/MainLayout'
import { Paragraph } from '../components/Paragraph'
import { tw } from '../tailwind'

export const StatisticsView: React.FC = () => {
  const { t } = useTranslation()
  return (
    <MainLayout>
      <View style={tw`flex justify-center items-center h-full w-full`}>
        <Paragraph style={tw`text-3xl`}>{t('comingSoon.statistics')}</Paragraph>
      </View>
    </MainLayout>
  )
}
