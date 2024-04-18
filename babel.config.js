module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@screens': './app/screens',
          '@components': './app/components',
          '@services': './app/services',
          '@utils': './app/utils',
          '@redux': './app/redux',
        },
      },
    ],
    '@babel/plugin-transform-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
};
