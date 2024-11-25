import { View } from "react-native";
import { broadcastStyle } from "../style";
import { Text } from "react-native";
import MaterialIcon from "@/components/common/MaterialIcon";
import colors from "@/styles/colors";

const BroadcastHeader = () => {
    return (
        <View style={broadcastStyle.container}>
           <MaterialIcon icon="broadcast" color={colors.white} />
            <Text style={ broadcastStyle.text}>Broadcast</Text>
        </View>
    );
}

export default BroadcastHeader;