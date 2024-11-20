import {StyleSheet} from 'react-native';

const postStyle = StyleSheet.create({
  postActionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  userData: {
    padding: 15,
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    marginBottom: 2,
  },
  cicularAvatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  postImgContainer: {
    flexDirection: 'row',
    height: 300,
  },
  postImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default postStyle;
