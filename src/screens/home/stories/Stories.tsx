import {

  Image,
  Text,
  View,
} from 'react-native';
import {storystyle} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import SingleStory from './SingleStory';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {  useSelector } from 'react-redux';
import colors from '@/styles/colors';

const Stories = ({navigation}: {navigation: any}) => {
  
  const listHeader = () => <MyStory />;
  
  const renderItem = (item: any) => (
    <SingleStory navigation={navigation} story={item} />
  );

  
  const stories = useSelector((state:any) => state.stories);


  return (<View style={{flex: 1}}>
      <FlatList
        data={stories}
        ListHeaderComponent={listHeader}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        style={storystyle.storiesList}></FlatList>
    </View>
  );
};

export default Stories;

const MyStory = () => {
  return (
    <View style={storystyle.storyParent}>
      <View style={storystyle.myStory}>
        <Image
          source={{uri: `https://picsum.photos/id/786/200/300`}}
         
          style={storystyle.image}
        />
        
      </View>
      <Icon
          name={'plus'}
          size={25}
          color={colors.black}
          style={storystyle.addIcon}
        />

      <Text style={storystyle.yourStoryText}>Your Story</Text>
    </View>
  );
};
