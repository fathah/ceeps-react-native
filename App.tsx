import './wdyr';
import React from 'react';

import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import StackNavigator from './src/routing/StackNavigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StackNavigator/>
      <Toast />
    </Provider>
  );
}

export default App;
