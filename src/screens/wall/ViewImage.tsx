import {SCREEN_WIDTH} from '@/constants/dimens';
import {RootStateType} from '@/redux/store';
import {PixelImage} from '@/types/images';
import {StackParamList} from '@/types/routeParams';
import {Screens} from '@/types/screens';
import {RouteProp} from '@react-navigation/native';
import {FC, useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import { useSelector} from 'react-redux';

type ViewImageRouteProps = RouteProp<StackParamList, Screens.IMAGE_DETAIL>;

type ViewImagePageProps = {
  route: ViewImageRouteProps;
  image: PixelImage;
};

const ViewImage: FC<ViewImagePageProps> = ({route, image}) => {
  const [images, setImages] = useState<PixelImage[]>([]);

  const selector = useSelector((state: RootStateType) => state.images);
  const currentImage = route.params.image;
  const initialIndex = images.findIndex(
    image => image.url === currentImage.url,
  );

  const [currentIndex, setCurrentIndex] = useState(initialIndex); // Example initial index

  useEffect(() => {
    setImages(selector.images);
  }, [selector.images]);

  return (
    <View style={{maxWidth: '100%'}}>
      <FlatList
        horizontal
        data={images}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: SCREEN_WIDTH,
          offset: SCREEN_WIDTH * index,
          index,
        })}
        pagingEnabled
        initialScrollIndex={initialIndex >= 0 ? initialIndex : 0}
        onMomentumScrollEnd={event => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(offsetX / SCREEN_WIDTH);
          setCurrentIndex(index);
        }}
        renderItem={({item}) => (
          <View
            style={{
              width: SCREEN_WIDTH,
            }}>
            <Image
              source={{uri: item.url}}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                overflow: 'hidden',
                marginBottom: 10,
                backgroundColor: '#F2F2F2',
                resizeMode: 'contain',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ViewImage;
