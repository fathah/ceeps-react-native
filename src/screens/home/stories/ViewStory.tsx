import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {storystyle} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../styles/colors';
import { StackParamList } from '@/types/routeParams';
import { Screens } from '@/types/screens';
import { globalstyle } from '@/styles/global';
import { useCallback } from 'react';

type ViewStoryProps = NativeStackScreenProps<StackParamList, Screens.STORY_VIEW_PAGE>;

const imageSource = { uri: `https://picsum.photos/1080/1920` };

const ViewStory = ({route, navigation}: ViewStoryProps) => {
  const {username} = route.params;

  const goBack = useCallback(() => {
      navigation.goBack();
  }, [navigation]);
  return (
    <View style={globalstyle.flex}>
      <ImageBackground
        source={imageSource}
        style={globalstyle.flex}
        resizeMode="cover"
      />

      <View style={storystyle.storyHeader}>
        <View style={storystyle.centerAlign}>
          <View style={storystyle.userAvatar}>
            <Text>{username[0]}</Text>
          </View>
          <Text>{username}</Text>
        </View>

        <TouchableOpacity
          onPress={goBack}>
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
