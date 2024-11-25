import {Image, Text, View} from 'react-native';
import {storystyle} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import SingleStory from './SingleStory';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import colors from '@/styles/colors';
import {useCallback, useMemo} from 'react';



type StoriesProps = {
  navigation: any;
};

const Stories: React.FC<StoriesProps> = ({ navigation }) => {

  const stories = useSelector((state: any) => state.stories);

  const listHeader = useCallback(() => <MyStory />, []);
  const renderItem = useCallback(
    (item: any) => <SingleStory navigation={navigation} story={item} />,
    [],
  );

  const keyExtractor = useMemo(
    () => (item: any, index: number) => index.toString(),
    [],
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={stories}
        ListHeaderComponent={listHeader}
        keyExtractor={keyExtractor}
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