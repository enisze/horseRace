import { useDimensions } from '@/src/hooks/useDimensions'
import type { FunctionComponent } from 'react'
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'

const NativeAd: FunctionComponent<{ id: string }> = ({ id }) => {
	const useGetBannerSize = () => {
		const { width } = useDimensions()

		if (width > 768) {
			return BannerAdSize.FULL_BANNER
		}
		return BannerAdSize.LARGE_BANNER
	}

	const bannerSize = useGetBannerSize()

	return (
		<BannerAd
			unitId={id}
			size={bannerSize ?? ''}
			requestOptions={{
				requestNonPersonalizedAdsOnly: true,
			}}
		/>
	)
}

export default NativeAd
