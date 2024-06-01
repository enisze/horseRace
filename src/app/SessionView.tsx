import { Stack } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { ImageBackground, View } from 'react-native'
import { MainLayout } from '../ui/components/MainLayout'
import { Paragraph } from '../ui/components/Paragraph'

const image = require('../../assets/background_1.png')

const SessionView = () => {
	const { t } = useTranslation()
	return (
		<MainLayout>
			<ImageBackground source={image} className='-m-3'>
				<Stack.Screen options={{ title: 'Sessions' }} />
				<View className='flex h-full w-full items-center justify-center '>
					<Paragraph className='text-3xl text-white'>
						{t('comingSoon.session')}
					</Paragraph>
				</View>
			</ImageBackground>
		</MainLayout>
	)
}

export default SessionView
