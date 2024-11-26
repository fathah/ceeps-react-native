import {Button, Keyboard, Text, TextInput, View} from 'react-native';
import BroadcastHeader from './components/BroadcastHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '@/types/routeParams';
import {Screens, Tabs} from '@/types/screens';
import {FC, useCallback, useState} from 'react';
import NativeLocalStorage from '../../../specs/NativeLocalStorage';
import Toast from 'react-native-toast-message';
import {broadcastStyle} from './style';
import {RouteProp} from '@react-navigation/native';

type BroadcastNavigationProps = BottomTabScreenProps<
  TabParamList,
  Tabs.BROADCAST
>;

type BroascastPageRouteProps = RouteProp<TabParamList, Tabs.BROADCAST>;

type BroadcastProps = {
  navigation: BroadcastNavigationProps;
  route: BroascastPageRouteProps;
};

const BroadcastIndex: FC<BroadcastProps> = ({
  navigation,
}): JSX.Element => {
  const [value, setValue] = useState('');
  const [fromNS, setFromNS] = useState(false);

  const handleChange = useCallback((text: string) => {
    setValue(text);
    setFromNS(false);
  }, []);

  const createData = useCallback(() => {
    NativeLocalStorage.setItem(value, 'world');
    Toast.show({
      type: 'success',
      text1: `Data Added`,
    });

    Keyboard.dismiss();
  }, [value]);

  const getData = useCallback(() => {
    const data = NativeLocalStorage.getItem('world');
    setValue(data ?? '');
    Toast.show({
      type: 'success',
      text1: `Data Fetched`,
    });
    setFromNS(true);
  }, []);

  const openModal = useCallback(() => {
    navigation.navigate(Screens.MODAL);
  }, [navigation]);

  return (
    <SafeAreaView>
      <BroadcastHeader />
      <View>
        <TextInput
          onChangeText={handleChange}
          style={broadcastStyle.input}
          value={value}
        />
        {fromNS && (
          <Text style={broadcastStyle.nslabel}> Data from Native Storage:</Text>
        )}
        <Text>{value}</Text>
        <View style={broadcastStyle.actionButtonContainers}>
          <Button onPress={createData} title="Create Data" />
          <Button onPress={getData} title="Get Data" />
          <Button onPress={openModal} title="Open Modal" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BroadcastIndex;
