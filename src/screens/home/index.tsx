import { View,ScrollView, Animated, Alert, FlatList, Text } from "react-native";
import Logo from "./header/Logo";
import Stories from "./stories/Stories";
import FloatingButton from "./addMoment/FloatingButton";
import { globalstyle } from "../../styles/global";
import { useRef, useState } from "react";
import { RefreshControl } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import SinglePost from "./posts/SinglePost";
import POSTS from "../../../data/posts";

const Home = ({ navigation }: { navigation: any }) => {

    const scrollPosition = useRef(0);
    const buttonAnimation = useRef(new Animated.Value(0)).current;

  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

    const handleScroll = (event:any) => {
        const currentScrollPosition = event.nativeEvent.contentOffset.y;
    
        if (currentScrollPosition > scrollPosition.current && isButtonVisible) {
         
          setIsButtonVisible(false);
          Animated.timing(buttonAnimation, {
            toValue: 1, 
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else if (currentScrollPosition < scrollPosition.current && !isButtonVisible) {
          setIsButtonVisible(true);
          Animated.timing(buttonAnimation, {
            toValue: 0, 
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
    
        scrollPosition.current = currentScrollPosition; // Update scroll position
      };
    
    return (
        <View style={globalstyle.relative}>
        <FlatList
          data={POSTS}
          ListHeaderComponent={()=><View><Logo /> <Stories navigation={navigation}/></View>}
          renderItem={(item) => <SinglePost item={item.item} /> }
          keyExtractor={(item, index) => index.toString()}
               onScroll={handleScroll}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => {
              setRefreshing(true);
             
              setTimeout(() => {
                setRefreshing(false);
                Toast.show({
                  type: 'success',
                  text1: 'Moments Refreshed',
                 
                 
                });
              }, 1000);
            }} />
          }

            />
           
            <FloatingButton buttonAnimation={buttonAnimation}/>
           
        </View>
    );
}

export default Home;

Home.whyDidYouRender = true;
