import { Button, TextInput, View } from "react-native";
import { Text } from "react-native";
import MaterialIcon from "@/components/common/MaterialIcon";
import colors from "@/styles/colors";
import { wallStyle } from "../style";

const WallHeader = () => {
    return (
        <View style={wallStyle.container}>
            <View style={wallStyle.logo}>
            <MaterialIcon icon="aspect-ratio" color={colors.white} />
                <TextInput style={{
                    color: colors.white,
                   
                }}
                    placeholder="Search Images..."
                    placeholderTextColor={colors.whiteTint}
                />
            </View>
            
            <MaterialIcon icon="dots-vertical" color={colors.white} />
        </View>
    );
}

export default WallHeader;