import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import postStyle from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../styles/colors';
import { useDispatch } from 'react-redux';
import { markAsLiked } from '@/redux/slices/postSlices';

const SinglePost = ({ post }: { post: any }) => {
  const {item} = post;
  const isOdd = item.id % 2 === 1;
  const image = isOdd ? '500/500' : '500/600';

  const dispatch = useDispatch();

  function handleLike() {
    dispatch(markAsLiked(item.id));
  }
  return (
    <View key={item.id} style={{flex: 1}}>
      <View
        style={postStyle.userData}>
        <View
          style={postStyle.cicularAvatar}>
          <Text>{item?.username[0]}</Text>
        </View>
        <Text>{item?.username} </Text>
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
        <TouchableOpacity onPress={handleLike}>
      <Icon name={item.isLiked? 'heart' : 'heart-outline'} size={25} color={colors.black} />
        </TouchableOpacity>


        
        <TouchableOpacity onPress={() => {}}>
          <Icon name={'comment-outline'} size={25} color={colors.black} />
        </TouchableOpacity>
        <Icon name={'send'} size={25} color={colors.black} />
      </View>
    </View>
  );
};

SinglePost.whyDidYouRender = true;

export default SinglePost;

