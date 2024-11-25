import colors from '@/styles/colors';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {StackNavigationOptions} from '@react-navigation/stack';
import {COLOR_THEME} from './colors';
import {size} from './dimens';

export const AppStackScreenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

export const TabStackScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {paddingLeft: size.xs, paddingRight: size.xs},
};

export const SELECTED_TAB_STYLES = {
  backgroundColor: COLOR_THEME.NEUTRAL.NT_600,
  flex: 1,
  borderRadius: size.xl3,
  margin: 5,
};

export const UNSELECTED_TAB_STYLES = {
  flex: 1,
  borderRadius: size.xl3,
  margin: 5,
};
