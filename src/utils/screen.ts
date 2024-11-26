import {Dimensions, Platform} from 'react-native';

const isAndroid = (): boolean => Platform.OS === 'android';
const getAndroidApiLevel = (): number => {
  const version = Platform.Version;
  return typeof version === 'string' ? parseInt(version, 10) : version;
};
const isIOS = (): boolean => Platform.OS === 'ios';
const getScreenWidth = (): number => Dimensions.get('screen').width;
const getScreenHeight = (): number => Dimensions.get('screen').height;
const getWindowHeight = (): number => Dimensions.get('window').height;
const getWindowWidth = (): number => Dimensions.get('window').width;

export {
  isAndroid,
  getAndroidApiLevel,
  isIOS,
  getWindowWidth,
  getScreenWidth,
  getWindowHeight,
  getScreenHeight,
};
