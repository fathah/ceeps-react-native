import {View, FlatList} from 'react-native';
import Logo from './header/Logo';
import {FC, useCallback, useRef, useState} from 'react';
import {RefreshControl} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import SinglePost from './posts/SinglePost';
import {useSelector} from 'react-redux';
import Stories from './stories';
import {globalstyle} from '@/styles/global';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from '@/types/routeParams';
import { Tabs } from '@/types/screens';

export type HomePageNavProps = BottomTabScreenProps<TabParamList, Tabs.HOME>;

export type HomePageProps = {
  navigation: HomePageNavProps;
};

const Home: FC<HomePageProps> = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const posts = useSelector((state: any) => state.posts);

  const renderItem = useCallback((item: any) => <SinglePost post={item} />, []);

  const ListHeader = () => (
    <View>
      <Logo />
      <Stories navigation={navigation} />
    </View>
  );

  function handelRefresh() {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      Toast.show({
        type: 'success',
        text1: 'Moments Refreshed',
      });
    }, 1000);
  }

  const refreshControl = (
    <RefreshControl refreshing={refreshing} onRefresh={handelRefresh} />
  );

  return (
    <View style={globalstyle.flex}>
      <FlatList
        data={posts}
        ListHeaderComponent={ListHeader}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        scrollEventThrottle={16}
        refreshControl={refreshControl}
      />
    </View>
  );
};

Home.whyDidYouRender = true;

export default Home;
