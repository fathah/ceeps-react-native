import {Text, View, Image, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WallHeader from './components/WallHeader';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '@/types/routeParams';
import {Tabs} from '@/types/screens';
import {FC, useEffect, useState} from 'react';
import {SCREEN_WIDTH} from '@/constants/dimens';
import {wallStyle} from './style';
import {PixelImage} from '@/types/images';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '@/redux/store';
import {fetchImages} from '@/redux/slices/imageSlices';

type WallNaivigationProps = BottomTabScreenProps<TabParamList, Tabs.WALL>;

type WallPageProps = {
  navigation: WallNaivigationProps;
};

const {width: screenWidth} = SCREEN_WIDTH;

const WallIndex: FC<WallPageProps> = (): JSX.Element => {
  const [columns, setColumns] = useState(2);

  const dispatch = useDispatch();
  const {images, loading, error} = useSelector(
    (state: RootStateType) => state.images,
  );

  useEffect(() => {
    dispatch(fetchImages({query: 'nature', count: 10}));
  }, [dispatch]);

  const imageSize = screenWidth / columns - 10;

  const renderItem = ({item}: {item: PixelImage}) => (
    <Image
      source={{uri: item.url}}
      style={[wallStyle.thumbImage, {width: imageSize, height: imageSize}]}
      resizeMode="cover"
    />
  );

  const keyExtractor = (item: PixelImage, index: number) => index.toString();

  return (
    <SafeAreaView>
      <WallHeader />
      <FlatList
        data={images}
        numColumns={columns}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListFooterComponent={BottomSpace}
      />
    </SafeAreaView>
  );
};

export default WallIndex;

const BottomSpace = () => <View style={{height: 100}} />;
