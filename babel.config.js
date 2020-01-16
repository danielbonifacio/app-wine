module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@sdk': './src/sdk',
          '@screens': './src/screens',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@animations': './src/assets/animations',
          '@constants': './src/constants.ts',
        },
      },
    ],
  ],
};
