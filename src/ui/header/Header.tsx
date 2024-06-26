import { appLink, paypalDonationURL } from '@/src/constants'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Linking, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Paragraph } from 'react-native-paper'
import { HorseRaceModal } from '../components/HorseRaceModal'
import { HorseRaceButton } from '../components/buttons/HorseRaceButton'
import { ShareAppButton } from './ShareAppButton'

const image = require('../../../assets/background_1.png')

export const Header = () => {
	const { t } = useTranslation()

	const [showModal, setShowModal] = useState(false)

	const donationsNavigate = async () => {
		await Linking.openURL(paypalDonationURL)
	}

	const rateApp = async () => {
		await Linking.openURL(appLink)
	}
	return (
		<>
			<View className='flex flex-row'>
				<ShareAppButton />
				<HorseRaceButton onPress={rateApp} style={{ marginLeft: 4 }}>
					<Icon name='description' color='white' size={24} />
				</HorseRaceButton>
				<HorseRaceButton style={{ marginLeft: 4 }} onPress={donationsNavigate}>
					<Icon type='antdesign' name='rocket1' color='white' size={24} />
				</HorseRaceButton>

				<HorseRaceButton
					style={{ marginLeft: 4 }}
					onPress={() => setShowModal(true)}
				>
					<Icon type='fontawesom5' name='info' color='white' size={24} />
				</HorseRaceButton>
			</View>

			<HorseRaceModal
				visible={showModal}
				showBackButton
				onClose={() => setShowModal(false)}
			>
				<Paragraph className='m-5 text-white'>{t('about')}</Paragraph>
			</HorseRaceModal>
		</>
	)
}
