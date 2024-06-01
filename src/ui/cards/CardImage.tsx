import { useGetCardWidthAndHeight } from '@/src/hooks/useGetCardWidthAndHeight'
import type { FunctionComponent } from 'react'
import { Image, type ImageSourcePropType, View } from 'react-native'

const CardImage: FunctionComponent<{ source: ImageSourcePropType }> = ({
	source,
}) => {
	const cardStyles = useGetCardWidthAndHeight()
	return (
		<View style={{ flexGrow: 1 }}>
			<Image source={source} style={cardStyles} />
		</View>
	)
}

export default CardImage
