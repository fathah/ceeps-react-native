import {Image, Text, TouchableOpacity, View} from 'react-native';
import {storystyle} from './styles';
import {useDispatch} from 'react-redux';
import {markAsViewed} from '../../../redux/slices/storySlices';
import LinearGradient from 'react-native-linear-gradient';

const SingleStory = ({
  navigation,
  story,
}: {
  navigation: any;
  story: {item: any; index: number};
}) => {
  const item = story.item;

  const dispatch = useDispatch();

  function handleViewStory() {
    navigation.navigate('StoryView', {username: item.username});
    dispatch(markAsViewed(item.id));
  }

  const gradientColors = item.isViewed
    ? ["#bdc3c7","#bdc3c7"]
    : ['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5'];
  
  const imgSource = {
    uri: `https://picsum.photos/200/300?random=${item?.id}`,
  };

  return (
    <TouchableOpacity
      key={story.index}
      style={storystyle.storyParent}
      onPress={handleViewStory}>
      
      
      <LinearGradient
      colors={gradientColors}
    
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
        style={storystyle.imageBorder}>

        <Image
          source={imgSource}
          style={storystyle.image}
        />


      </LinearGradient>
      
      {/* <View style={borderStyle}>
        <Image
          source={imgSource}
          style={storystyle.image}
        />
      </View> */}
      <Text>{item?.username}</Text>
    </TouchableOpacity>
  );
};

export default SingleStory;
