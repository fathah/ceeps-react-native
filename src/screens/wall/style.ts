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
    flex: 1,
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
  paginationBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 10,
    marginVertical: 10,
  },
  viewImageContainer: {maxWidth: '100%', position: 'relative'},
  viewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,

    marginBottom: 10,
    backgroundColor: '#F2F2F2',
    resizeMode: 'contain',
  },
  closeImageContainer: {position: 'absolute', top: 10, right: 10},
  closeImage: {
    backgroundColor: colors.black,
    width: 40,
    height: 40,
    borderRadius: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
