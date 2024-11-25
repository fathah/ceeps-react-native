import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WallHeader from './components/WallHeader';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '@/types/routeParams';
import {Tabs} from '@/types/screens';
import {FC} from 'react';

type WallNaivigationProps = BottomTabScreenProps<TabParamList, Tabs.WALL>;

type WallPageProps = {
  navigation: WallNaivigationProps;
 
};


const WallIndex: FC<WallPageProps> = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView>
      <WallHeader />
      <Text>Wall Items</Text>
    </SafeAreaView>
  );
};

export default WallIndex;
