import { SIDE_CARD_SET_GAP } from '@/src/constants'
import { levelAtom } from '@/src/contexts/GameContext'
import { gapStyles } from '@/src/styles/gapStyles.styles'
import { useAtomValue } from 'jotai'
import type { FunctionComponent } from 'react'
import { View } from 'react-native'
import { RandomCardAutomated } from '../cards/RandomCardAutomated'

export const SideCardSet: FunctionComponent = () => {
	const levelAmount = useAtomValue(levelAtom)

	const styles = gapStyles(SIDE_CARD_SET_GAP, 'column')

	return (
		<View className='flex flex-col'>
			{[...Array<number>(levelAmount)].map((e, i) => (
				<View style={styles.child} key={i}>
					<RandomCardAutomated level={levelAmount - i} />
				</View>
			))}
		</View>
	)
}
