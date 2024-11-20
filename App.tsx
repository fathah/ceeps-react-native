import React from 'react';
import MainComps from './src/screens/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewStory from './src/screens/home/stories/ViewStory';
import { RootStackParamList } from './src/types/routeParams';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index"  component={MainComps} options={{ headerShown: false }} />
        <Stack.Screen name="StoryView" component={ViewStory} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
