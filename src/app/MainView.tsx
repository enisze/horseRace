import { Stack } from 'expo-router'
import { ImageBackground, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { WinnerModal } from '../ui/WinnerModal'
import NativeAd from '../ui/ads/NativeAd'
import { MainCardSet } from '../ui/cardSets/MainCardSet'
import { SideCardSet } from '../ui/cardSets/SideCardSet'
import { RandomCardSet } from '../ui/cards/RandomCardSet'

const image = require('../../assets/background_1.png')

const MainView = () => {
	return (
		<View className='h-full w-full'>
			<ImageBackground source={image} className='-m-3'>
				<Stack.Screen options={{ title: '' }} />
				<View className='flex h-full w-full'>
					<View className='flex flex-row p-6'>
						<SideCardSet />
						<MainCardSet />
					</View>

					<View className='flex-row items-center justify-center pb-2'>
						<Icon
							className='-mr-4 fill-white'
							name='arrow-right'
							type='material'
							color='white'
							size={64}
						/>
						<RandomCardSet />
					</View>
					<WinnerModal />
					<View className='flex items-center'>
						<NativeAd id='ca-app-pub-7941882405849156/9049599050' />
					</View>
				</View>
			</ImageBackground>
		</View>
	)
}

export default MainView
