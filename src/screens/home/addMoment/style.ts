import colors from '@/styles/colors';
import {StyleSheet} from 'react-native';

const addMomentStyles = StyleSheet.create({
  buttonParent: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  button: {
    backgroundColor: colors.black,
    height: 60,
    width: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    elevation: 5,
  },
});

export default addMomentStyles;
