module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/warnings'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@component', './src/components'],
          ['@views', './src/views'],
          ['@sdk', './sdk/views']
        ],
        extensions: ['.ts', '.tsx', '.json']
      },
    }
  },
  rules: {
    'prettier/prettier': 0,
    "react/jsx-max-props-per-line": ['error', { "maximum": 1 }],
    "indent": ["error", 2, {"ignoredNodes": ["JSXElement"]}],
    "react/jsx-indent": ["error", 2],
  }
};
