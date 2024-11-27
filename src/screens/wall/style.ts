import colors from '@/styles/colors';
import {StyleSheet} from 'react-native';

export const wallStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#000',
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  thumbImage: {
    width: '100%',
    resizeMode: 'cover',
    margin: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      height: 200,
      width: 0,
    },
  },
  input: {
    color: colors.white,
  },
});
