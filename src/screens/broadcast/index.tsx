import {Button, Text, View} from 'react-native';
import BroadcastHeader from './components/BroadcastHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '@/types/routeParams';
import {Tabs} from '@/types/screens';
import {FC} from 'react';
import NativeLocalStorage from '../../../specs/NativeLocalStorage';



type BroadcastNavigationProps = BottomTabScreenProps<TabParamList, Tabs.BROADCAST>;

type BroadcastProps = {
    navigation: BroadcastNavigationProps;
}


const  createData = ()=>{
  NativeLocalStorage.setItem('hello', 'world');
}

const getData = () => {
  const data = NativeLocalStorage.getItem('world');
  console.log("Data is=>", data);
  
}

const BroadcastIndex: FC<BroadcastProps> = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView>
      <BroadcastHeader />
      <View>
      <Text>Broadcast Index</Text>
        <Button onPress={createData} title='Create Data' />
        <Button onPress={getData} title='Get Data'/>

      </View>
    </SafeAreaView>
  );
};

export default BroadcastIndex;
