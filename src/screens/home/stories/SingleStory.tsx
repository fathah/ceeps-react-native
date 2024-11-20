import { Image, Text, TouchableOpacity, View } from "react-native";
import { storystyle } from "./styles";

const SingleStory = ({navigation,story}:{navigation:any,story:{item:any, index:number}}) => {
    return (
        <TouchableOpacity
          key={story.index} style={storystyle.storyParent}
          onPress={() => navigation.navigate('StoryView', { username: story.item.name })}

          >
            <View style={storystyle.imageBorder}>
              <Image
                source={{
                  uri: `https://picsum.photos/200/300?random=${story.index + 1}`,
                }}
                style={storystyle.image}
              />
            </View>

            <Text>{story?.item?.name}</Text>
          </TouchableOpacity>
    );
}

export default SingleStory;