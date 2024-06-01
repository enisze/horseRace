const path = require('node:path')
const loadConfig = require('tailwindcss/loadConfig')

/** @type {import("tailwindcss").Config | null} */
const _tailwindConfig = null
/**
 * Transpiles tailwind.config.ts for babel
 * Fix until nativewind babel plugin supports tailwind.config.ts files
 */
function lazyLoadConfig() {
	return (
		_tailwindConfig ?? loadConfig(path.join(__dirname, 'tailwind.config.ts'))
	)
}

/** @type {import("@babel/core").ConfigFunction} */
module.exports = (api) => {
	api.cache.forever()

	return {
		presets: [
			'babel-preset-expo',
			{
				jsxImportSource: 'nativewind',
			},
			'nativewind/babel',
		],
		plugins: [
			[
				'nativewind/babel',
				{
					tailwindConfig: lazyLoadConfig(),
				},
			],
			require.resolve('expo-router/babel'),
		],
		env: {
			production: {
				plugins: ['react-native-paper/babel'],
			},
		},
	}
}
