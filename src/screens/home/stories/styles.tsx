import {StyleSheet} from 'react-native';

export const storystyle = StyleSheet.create({
  storyParent: {
    marginRight: 10,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  imageBorder: {
    borderColor: 'grey',
    borderWidth: 1,

    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 70, height: 70, borderRadius: 50, margin: 4},
  replyContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    left: 10,
    padding: 12,
  },
  replyInput: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});
