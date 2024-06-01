import { useAtomValue } from 'jotai'
import { type FunctionComponent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native-paper'

import { useRestartGame, winnerAtom } from '../contexts/GameContext'
import type { RankSymbol } from '../types/RankSymbol.type'
import { Button } from './Button'
import NativeAd from './ads/NativeAd'
import Card from './cards/Card'
import { HorseRaceModal } from './components/HorseRaceModal'

export const WinnerModal: FunctionComponent = () => {
	const winner = useAtomValue(winnerAtom)
	const restart = useRestartGame()

	const [showModal, setShowModal] = useState(false)

	const { t } = useTranslation()

	useEffect(() => {
		if (winner) {
			setShowModal(true)
		}
	}, [winner])

	const symbol: RankSymbol = winner ? `A${winner}` : 'AC'

	return (
		<HorseRaceModal visible={showModal} onClose={() => setShowModal(false)}>
			<Text variant='headlineMedium' className='text-white'>
				{t('winner')}
			</Text>

			{winner && <Card rankSymbol={symbol} />}
			<Button
				onPress={() => {
					setShowModal(false)
					restart()
				}}
				title={t('restart')}
			/>
			<NativeAd id='ca-app-pub-7941882405849156/3177221624' />
		</HorseRaceModal>
	)
}
