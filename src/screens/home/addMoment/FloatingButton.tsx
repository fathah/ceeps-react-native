import { Animated, TouchableHighlight } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import addMomentStyles from "./style";
import colors from "@/styles/colors";

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
        <TouchableHighlight style={addMomentStyles.button}>
            <Icon name={"comment-plus-outline"} size={25} color={colors.white} />
        </TouchableHighlight></Animated.View>
    );
}

export default FloatingButton;