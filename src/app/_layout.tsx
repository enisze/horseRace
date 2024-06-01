import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { I18nextProvider } from 'react-i18next'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import mobileAds from 'react-native-google-mobile-ads'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Header } from 'react-native-elements'
import '../../globals.css'
import i18n from '../i18n'
import { UpdateProvider } from '../updates/UpdateProvider'
import { TRPCProvider } from '../utils/api'
import { AddWinnerStatisticsSideEffect } from './SideEffects/AddWinnerStatisticsSideEffect'

mobileAds()
	.initialize()
	.then(() => {
		// Initialization complete!
	})

// This is the main layout of the app
// It wraps your pages with the providers they need

const RootLayout = () => {
	return (
		<UpdateProvider>
			<TRPCProvider>
				{/*
        The Stack component displays the current page.
        It also allows you to configure your screens 
      */}

				<I18nextProvider i18n={i18n}>
					<PaperProvider>
						<SafeAreaProvider>
							<GestureHandlerRootView style={{ flex: 1 }}>
								<Stack
									screenOptions={{
										headerStyle: {
											backgroundColor: '#0f172a',
										},
										headerTitleStyle: { color: 'white' },
										headerTintColor: 'white',
										headerRight: () => <Header />,
									}}
								/>
								<AddWinnerStatisticsSideEffect />
								<StatusBar />
							</GestureHandlerRootView>
						</SafeAreaProvider>
					</PaperProvider>
				</I18nextProvider>
			</TRPCProvider>
		</UpdateProvider>
	)
}

export default RootLayout
