import colors from '@/styles/colors';
import {StyleSheet} from 'react-native';

export const broadcastStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#000',
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});
