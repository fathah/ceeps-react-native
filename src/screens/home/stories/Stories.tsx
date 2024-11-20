import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {STORIES} from '../../../../data/stories';
import { storystyle } from './styles';

const Stories = ({navigation}:{navigation:any}) => {
  return (
    <View>
      <ScrollView
        horizontal
        style={{
          paddingHorizontal: 15,
        }}>
        <View style={storystyle.storyParent}>
          <View style={storystyle.imageBorder}>
            <Image
              source={{uri: `https://picsum.photos/200/300`}}
              blurRadius={5}
              style={storystyle.image}
            />
            <Text
              style={{
                fontSize: 30,
                position: 'absolute',
                zIndex: 100,
              }}>
              +
            </Text>
          </View>

          <Text>You</Text>
        </View>

        {STORIES.map((story, index) => (
          <TouchableOpacity
          key={index} style={storystyle.storyParent}
          onPress={() => navigation.navigate('StoryView', { username: story.name })}

          >
            <View style={storystyle.imageBorder}>
              <Image
                source={{
                  uri: `https://picsum.photos/200/300?random=${index + 1}`,
                }}
                style={storystyle.image}
              />
            </View>

            <Text>{story.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
