import MaterialIcon from '@/components/common/MaterialIcon';
import {
  SELECTED_TAB_STYLES,
  TabStackScreenOptions,
  UNSELECTED_TAB_STYLES,
} from '@/constants/screenOptions';
import BroadcastIndex from '@/screens/broadcast';
import Home from '@/screens/home';
import WallIndex from '@/screens/wall';
import WhisperIndex from '@/screens/whisper';
import colors from '@/styles/colors';
import {TabParamList} from '@/types/routeParams';
import {Tabs} from '@/types/screens';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {BottomTabBarButtonProps} from 'node_modules/@react-navigation/bottom-tabs/lib/typescript/commonjs/src';
import {TouchableOpacity, View} from 'react-native';

const Tab = createBottomTabNavigator<TabParamList>();

const NavButton = ({props}: {props: BottomTabBarButtonProps}) => (
  <View
    style={
      props.accessibilityState?.selected
        ? SELECTED_TAB_STYLES
        : UNSELECTED_TAB_STYLES
    }>
    <TouchableOpacity activeOpacity={1} {...props} />
  </View>
);

const homeTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: props => (
    <MaterialIcon
      icon="home"
      color={props.focused ? colors.white : colors.black}
    />
  ),
  tabBarButton: props => <NavButton props={props} />,
};

const broadCastTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: props => (
    <MaterialIcon
      icon="broadcast"
      color={props.focused ? colors.white : colors.black}
    />
  ),
  tabBarButton: props => <NavButton props={props} />,
};

const whisperTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: props => (
    <MaterialIcon
      icon="android-messages"
      color={props.focused ? colors.white : colors.black}
    />
  ),
  tabBarButton: props => <NavButton props={props} />,
};

const wallTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: props => (
    <MaterialIcon
      icon="aspect-ratio"
      color={props.focused ? colors.white : colors.black}
    />
  ),
  tabBarButton: props => <NavButton props={props} />,
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={TabStackScreenOptions}>
      <Tab.Screen name={Tabs.HOME} component={Home} options={homeTabOptions} />
      <Tab.Screen
        name={Tabs.BROADCAST}
        component={BroadcastIndex}
        options={broadCastTabOptions}
      />
      <Tab.Screen
        name={Tabs.WHISPER}
        component={WhisperIndex}
        options={whisperTabOptions}
      />
      <Tab.Screen
        name={Tabs.WALL}
        component={WallIndex}
        options={wallTabOptions}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
