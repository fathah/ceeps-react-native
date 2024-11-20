import { Animated, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../../../styles/colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import addMomentStyles from "./style";

const FloatingButton = ({ buttonAnimation }: { buttonAnimation: Animated.Value }) => {
    const style = [addMomentStyles.buttonParent,
    {
        transform: [
            {
                translateY: buttonAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100], // 100px below the screen
                }),
            },
        ]
    }];
    return (<Animated.View style={style}>
        <TouchableHighlight style={{
            backgroundColor: colors.black,
            height:60,
            width: 60,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
           
            shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
            elevation: 5,
    
        }}>
            <Icon name={"comment-plus-outline"} size={25} color={colors.white} />
        </TouchableHighlight></Animated.View>
    );
}

export default FloatingButton;