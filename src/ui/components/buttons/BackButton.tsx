import 'react'

import type { FunctionComponent } from 'react'
import { Icon } from 'react-native-elements'

import { HorseRaceButton } from './HorseRaceButton'

export const BackButton: FunctionComponent<{
	darkBg?: boolean
	onPress: () => void
}> = ({ darkBg = true, onPress }) => {
	return (
		<HorseRaceButton onPress={onPress}>
			<Icon type='material' name='close' color={darkBg ? '#fff' : '#2089dc'} />
		</HorseRaceButton>
	)
}
