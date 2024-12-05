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
import LoadingImages from './components/LoadingImages';
import AppButton from '@/components/widgets/AppButton';

type WallNaivigationProps = BottomTabScreenProps<TabParamList, Tabs.WALL>;

type WallPageProps = {
  navigation: WallNaivigationProps;
};

const WallIndex: FC<WallPageProps> = ({navigation}): JSX.Element => {
  const [columns, setColumns] = useState(2);
  const [queryVal, setQuery] = useState('valley');
  const [images, setImages] = useState<PixelImage[] | null>(null);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const loadImageCallback = (success: boolean, apiResponse: PixelImage[]) => {
    if (success) {
      setImages(apiResponse);
    } else {
      console.error('Failed to load images:', apiResponse);
    }
  };

  const fetchImage = (query: string, pageNumber: number = 1) => {
    const payload = {
      query,
      count: 10,
      page: pageNumber,
      callback: loadImageCallback,
    };
    dispatch(getImages(payload));
  };

  useEffect(() => {
    fetchImage(queryVal);
  }, []);

  const imageSize = (SCREEN_WIDTH()/ columns) - 10;

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
    setPage(1);
    setQuery(query);
    setImages(null);
    fetchImage(query);
  };
  const nextPage = () => {
    setImages(null);
    const newPage = page + 1;
    setPage(newPage);
    fetchImage(queryVal, newPage);
  };

  const prevPage = () => {
    setImages(null);
    const prev = page - 1;
    setPage(prev);
    fetchImage(queryVal, prev);
  };

  const bottomNavigation = (
    <View
      style={wallStyle.paginationNav}>
      {page > 1 && <AppButton text="<< Previous" onPress={prevPage} />}
      <AppButton text="Next >>" onPress={nextPage} />
    </View>
  );

  return (
    <SafeAreaView>
      <WallHeader onSearch={handleSearch} />
      {images === null ? (
        <LoadingImages />
      ) : (
        <FlatList
          data={images}
          numColumns={columns}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListFooterComponent={bottomNavigation}
        />
      )}
    </SafeAreaView>
  );
};

export default WallIndex;
