import { Button, View } from "react-native";
import { Text } from "react-native";
import MaterialIcon from "@/components/common/MaterialIcon";
import colors from "@/styles/colors";
import { wallStyle } from "../style";

const WallHeader = () => {
    return (
        <View style={wallStyle.container}>
            <View style={wallStyle.logo}>
            <MaterialIcon icon="aspect-ratio" color={colors.white} />
            <Text style={ wallStyle.text}>Pixels</Text>
            </View>
            
            <MaterialIcon icon="dots-vertical" color={colors.white} />
        </View>
    );
}

export default WallHeader;