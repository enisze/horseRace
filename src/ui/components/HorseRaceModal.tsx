import type { FunctionComponent, PropsWithChildren } from 'react'
import { ImageBackground, Modal, type ModalProps, View } from 'react-native'

import { BackButton } from './buttons/BackButton'

export type HorseRaceModalProps = PropsWithChildren<ModalProps> & {
	onClose: () => void
	showBackButton?: boolean
}

const image = require('../../../assets/background_1.png')

export const HorseRaceModal: FunctionComponent<HorseRaceModalProps> = ({
	visible,
	children,
	onClose,
	showBackButton = true,
	...props
}) => {
	return (
		<Modal
			animationType='slide'
			visible={visible}
			transparent={true}
			{...props}
			onRequestClose={onClose}
		>
			<ImageBackground
				source={image}
				className={`m-auto flex w-full items-center justify-center rounded-xl border border-blue-200 p-2 shadow-2xl shadow-black ${props.className}`}
			>
				{showBackButton && (
					<View className='absolute right-4 top-4'>
						<BackButton darkBg={true} onPress={onClose} />
					</View>
				)}

				{children}
			</ImageBackground>
		</Modal>
	)
}
