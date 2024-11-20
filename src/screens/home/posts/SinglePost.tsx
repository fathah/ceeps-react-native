import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import postStyle from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../styles/colors';

const SinglePost = ({item}: {item: any}) => {
  const isOdd = item.id % 2 === 1;
  const image = isOdd ? '500/500' : '500/600';
  return (
    <View key={item.id} style={{flex: 1}}>
      <View
        style={postStyle.userData}>
        <View
          style={postStyle.cicularAvatar}>
          <Text>{item?.username[0]}</Text>
        </View>
        <Text>{item?.username}</Text>
      </View>

      <View style={postStyle.postImgContainer}>
        <Image
          style={postStyle.postImage}
          source={{
            uri: `https://picsum.photos/${image}?random=${item.id + 2}`,
          }}
        />
      </View>

      <View style={postStyle.postActionButtons}>
        <Icon name={'heart-outline'} size={25} color={colors.black} />
        <TouchableOpacity onPress={() => {}}>
          <Icon name={'comment-outline'} size={25} color={colors.black} />
        </TouchableOpacity>
        <Icon name={'send'} size={25} color={colors.black} />
      </View>
    </View>
  );
};

export default SinglePost;

