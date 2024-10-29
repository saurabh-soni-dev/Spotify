module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ... other configs, if an array
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
          '.style.ts',
        ],
        alias: {
          '@imageIndex': './src/assets/imageIndex.ts',
          '@svgIndex': './src/assets/svgIndex.ts',
          '@components': './src/components',
          '@card': './src/components',
          '@player': './src/components',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@screenName': './src/navigation/screenName.ts',
          '@screens': './src/screens',
          '@services': './src/services',
          '@redux': './src/services/redux',
          '@api': './src/services/api',
          '@config': './src/services/config',
          '@theme': './src/theme',
          '@utility': './src/utility',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
