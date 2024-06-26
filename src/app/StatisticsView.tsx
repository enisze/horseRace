import { Stack } from 'expo-router'
import { useAtomValue } from 'jotai'
import { ImageBackground, View } from 'react-native'
import { Text } from 'react-native-paper'
import type { RankSymbol } from '../types/RankSymbol.type'
import Card from '../ui/cards/Card'
import { MainLayout } from '../ui/components/MainLayout'
import { totalAtom, valuesAtom } from '../utils/statisticAtoms'

const keys: RankSymbol[] = ['AC', 'AD', 'AS', 'AH']

const image = require('../../assets/background_1.png')

const StatisticsView: React.FC = () => {
	const total = useAtomValue(totalAtom)
	const vals = useAtomValue(valuesAtom)

	return (
		<MainLayout>
			<ImageBackground source={image} className='-m-3'>
				<Stack.Screen options={{ title: 'Statistics' }} />
				<View className='h-full w-full p-4'>
					<Text variant='headlineLarge' className='text-white'>
						{'Statistics'}
					</Text>
					<Text variant='headlineLarge' className='text-white'>
						{`Total games: ${total}`}
					</Text>

					<View className={'flex-col gap-y-1'}>
						{keys.map((key, idx) => {
							return (
								<View
									className='flex-row items-center justify-start gap-x-4'
									key={idx}
								>
									<View>
										<Card rankSymbol={key} />
									</View>
									<Text variant='headlineLarge' className='text-white'>
										Wins: {vals[idx]}
									</Text>
									<Text variant='headlineLarge' className='text-white'>
										{`(${getPercentage(vals[idx], total)}%)`}
									</Text>
								</View>
							)
						})}
					</View>
				</View>
			</ImageBackground>
		</MainLayout>
	)
}

export default StatisticsView

const getPercentage = (num: number | undefined, total: number) => {
	return total !== 0 && num && num !== 0 ? Math.round((num / total) * 100) : 0
}
