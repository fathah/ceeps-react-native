import {Text, View} from 'react-native';
import BroadcastHeader from './components/BroadcastHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '@/types/routeParams';
import {Tabs} from '@/types/screens';
import {FC} from 'react';

type BroadcastNavigationProps = BottomTabScreenProps<TabParamList, Tabs.BROADCAST>;

type BroadcastProps = {
    navigation: BroadcastNavigationProps;
}

const BroadcastIndex: FC<BroadcastProps> = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView>
      <BroadcastHeader />
      <Text>Broadcast Index</Text>
    </SafeAreaView>
  );
};

export default BroadcastIndex;
