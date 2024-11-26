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
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    height: 50,
    backgroundColor: '#F1F1F1',
  },
  nslabel: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  actionButtonContainers: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
