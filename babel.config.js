module.exports = function (api) {
  api.cache.forever()

  return {
    presets: ["babel-preset-expo"],
    plugins: [["nativewind/babel"], require.resolve("expo-router/babel")],
    env: {
      production: {
        plugins: ["react-native-paper/babel"]
      }
    }
  }
}
