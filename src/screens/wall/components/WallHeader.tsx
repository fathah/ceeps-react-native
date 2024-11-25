import { View } from "react-native";
import { Text } from "react-native";
import MaterialIcon from "@/components/common/MaterialIcon";
import colors from "@/styles/colors";
import { wallStyle } from "../style";

const WallHeader = () => {
    return (
        <View style={wallStyle.container}>
           <MaterialIcon icon="book-open-outline" color={colors.white} />
            <Text style={ wallStyle.text}>Wall</Text>
        </View>
    );
}

export default WallHeader;