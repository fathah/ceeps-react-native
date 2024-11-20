import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {STORIES} from '../../../../data/stories';
import { storystyle } from './styles';
import { FlatList } from 'react-native-gesture-handler';
import SingleStory from './SingleStory';
import colors from '../../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stories = ({navigation}:{navigation:any}) => {
  return (
    <View>
      <FlatList
        data={STORIES}
        ListHeaderComponent={() => <StoryHeader/> }
        keyExtractor={(_, index) => index.toString()}
        renderItem={(item) => <SingleStory navigation={navigation} story={item}/> }
        horizontal
        style={storystyle.storiesList}>
        

       
      </FlatList>
    </View>
  );
};

export default Stories;


const StoryHeader = () => {
  return <View style={storystyle.storyParent}>
    <View style={storystyle.imageBorder}>
      <Image
        source={{ uri: `https://picsum.photos/200/300` }}
        blurRadius={3}
        style={storystyle.image}
      />
      <Icon name={"plus"} size={25} color={colors.black}
        style={storystyle.addIcon} />
    
    
    </View>

    <Text>You</Text>
  </View>;
}