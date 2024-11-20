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
  storyHeader: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,

    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 2,
  },
  userAvatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  replyInput: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  addIcon:{
    fontSize: 30,
    position: 'absolute',
    zIndex: 100,
  },
  storiesList:{
    paddingHorizontal: 15,
    paddingBottom: 15,
  }
});
