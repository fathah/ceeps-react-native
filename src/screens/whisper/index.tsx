import { Text, View } from "react-native";
import WhisperHeader from "./components/WhisperHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList } from "@/types/routeParams";
import { Tabs } from "@/types/screens";
import { FC } from "react";


type WhisperPageProps = BottomTabScreenProps<TabParamList, Tabs.WHISPER>;



const WhisperIndex: FC<WhisperPageProps> = ({navigation}): JSX.Element =>{
    
    return (
        <SafeAreaView>
            <WhisperHeader />
                <Text >Whisper Items</Text>
        </SafeAreaView>
    );
}

export default WhisperIndex;