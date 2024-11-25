import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../types/screens';
import ViewStory from '../screens/home/stories/ViewStory';
import { StackParamList } from '@/types/routeParams';
import TabNavigator from './TabNavigator';
import { AppStackScreenOptions } from '@/constants/screenOptions';
import Home from '@/screens/home';

const Stack = createStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={AppStackScreenOptions}>
        <Stack.Screen
          name={Screens.TABS}
          component={TabNavigator}
        />
        <Stack.Screen
          name={Screens.INDEX_PAGE}
          component={Home}
        />
        <Stack.Screen
          name={Screens.STORY_VIEW_PAGE}
          component={ViewStory}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
