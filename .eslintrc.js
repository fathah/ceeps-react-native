module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react-native/no-inline-styles': 'error', 
    'react/jsx-no-bind': 'error',
    "react/jsx-uses-react": "off",
     "react/react-in-jsx-scope": "off",
  },
  
};
