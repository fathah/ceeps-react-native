import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../types/screens';
import ViewStory from '../screens/home/stories/ViewStory';
import {StackParamList} from '@/types/routeParams';
import TabNavigator from './TabNavigator';
import {
  AppStackScreenOptions,
  ScreenAsModalOptions,
} from '@/constants/screenOptions';
import Home from '@/screens/home';
import AddBroadCast from '@/screens/broadcast/addBroadcast';
import ViewImage from '@/screens/wall/ViewImage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={AppStackScreenOptions}>
        <Stack.Screen name={Screens.TABS} component={TabNavigator} />
        <Stack.Screen name={Screens.INDEX_PAGE} component={Home} />
        <Stack.Screen name={Screens.STORY_VIEW_PAGE} component={ViewStory} />

        <Stack.Screen
          name={Screens.MODAL}
          component={AddBroadCast}
          options={ScreenAsModalOptions}
        />

        <Stack.Screen name={Screens.IMAGE_DETAIL} component={ViewImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
