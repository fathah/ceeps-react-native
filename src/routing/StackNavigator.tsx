import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../types/screens';
import MainComps from '../screens/Index';
import {RootStackParamList} from '../types/routeParams';
import ViewStory from '../screens/home/stories/ViewStory';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name={Screens.INDEX_PAGE}
          component={MainComps}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.STORY_VIEW_PAGE}
          component={ViewStory}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
