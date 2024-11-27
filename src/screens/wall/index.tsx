import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WallHeader from './components/WallHeader';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '@/types/routeParams';
import {Screens, Tabs} from '@/types/screens';
import {FC, useEffect, useState} from 'react';
import {SCREEN_WIDTH} from '@/constants/dimens';
import {wallStyle} from './style';
import {PixelImage} from '@/types/images';
import {useDispatch} from 'react-redux';
import {getImages} from '@/redux/slices/imageSlices';
import Toast from 'react-native-toast-message';

type WallNaivigationProps = BottomTabScreenProps<TabParamList, Tabs.WALL>;

type WallPageProps = {
  navigation: WallNaivigationProps;
};

const WallIndex: FC<WallPageProps> = ({navigation}): JSX.Element => {
  const [columns, setColumns] = useState(2);

  const [images, setImages] = useState<PixelImage[] | null>(null);

  const dispatch = useDispatch();

  const loadImageCallback = (success: boolean, apiResponse: PixelImage[]) => {
    if (success) {
      setImages(apiResponse);
    } else {
      console.error('Failed to load images:', apiResponse);
    }
  };

  const fetchImage = (query: string = 'nature') => {
    const payload = {
      query,
      count: 10,
      callback: loadImageCallback,
    };
    dispatch(getImages(payload));
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const imageSize = SCREEN_WIDTH / columns - 10;

  const renderItem = ({item}: {item: PixelImage}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(Screens.IMAGE_DETAIL, {image: item})}>
      <Image
        source={{uri: item.url}}
        style={[wallStyle.thumbImage, {width: imageSize, height: imageSize}]}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  const keyExtractor = (item: PixelImage, index: number) => index.toString();

  const handleSearch = (query: string) => {
    if (query.length < 2) {
      Toast.show({
        type: 'error',
        text1: 'Please enter at least 2 characters',
      });
      return;
    }

    fetchImage(query);
  };

  return (
    <SafeAreaView>
      <WallHeader onSearch={handleSearch} />
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
