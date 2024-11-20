import { View,ScrollView } from "react-native";
import Logo from "./Logo";
import Stories from "./stories/Stories";
import Posts from "./Posts";

const Home = ({ navigation }:{navigation:any}) => {
    return (
        <View>
            <ScrollView>
            <Logo />
            <Stories navigation={navigation}/>
            <Posts/>
            </ScrollView>
        </View>
    );
}

export default Home;