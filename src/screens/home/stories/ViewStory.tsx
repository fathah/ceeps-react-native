import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from "../../../types/routeParams";
import { storystyle } from "./styles";

type ViewStoryProps = NativeStackScreenProps<RootStackParamList, 'StoryView'>;



const ViewStory = ({ route ,navigation  }: ViewStoryProps) => {
    const { username } = route .params;

    return (
        <View style={{ flex: 1 }}>
             <ImageBackground
                source={{
                    uri: `https://picsum.photos/1080/1920`,
                }}
                style={{ flex: 1 }}
                resizeMode="cover"
            />
            
       
            <View
            style={{
              
              flex: 1,
              flexDirection: 'row',
              position:"absolute",
                    top: 0,
                    left: 0,
                    right:0,

                    alignItems: 'center',
              justifyContent: 'space-between',
             
              
            
                    paddingHorizontal: 20,
              paddingVertical:10,
              marginBottom: 2,
            }}>
           
                


                <View style={{flexDirection:"row", alignItems:"center"}}>
                <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: 'grey',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}>
              <Text>{username[0]}</Text>
            </View>
                <Text>{username}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                }}
                >
                    <Text style={{
                        fontSize: 22,
                    }}>x</Text>
                </TouchableOpacity>


                </View>
                
             
            <View style={storystyle.replyContainer}>
            <TextInput
                style={storystyle.replyInput}
                    placeholder="Reply to Story"
            />
           </View>
            
           
        </View>
    );
}

export default ViewStory;