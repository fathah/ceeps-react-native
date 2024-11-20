import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../types/routeParams';
import {storystyle} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../styles/colors';

type ViewStoryProps = NativeStackScreenProps<RootStackParamList, 'StoryView'>;

const ViewStory = ({route, navigation}: ViewStoryProps) => {
  const {username} = route.params;

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: `https://picsum.photos/1080/1920`,
        }}
        style={{flex: 1}}
        resizeMode="cover"
      />

      <View style={storystyle.storyHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={storystyle.userAvatar}>
            <Text>{username[0]}</Text>
          </View>
          <Text>{username}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'close'} size={30} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View style={storystyle.replyContainer}>
        <TextInput style={storystyle.replyInput} placeholder="Reply to Story" />
      </View>
    </View>
  );
};

export default ViewStory;
