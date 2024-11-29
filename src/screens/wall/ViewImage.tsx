import MaterialIcon from '@/components/common/MaterialIcon';
import { SCREEN_WIDTH } from '@/constants/dimens';
import { RootStateType } from '@/redux/store';
import colors from '@/styles/colors';
import { PixelImage } from '@/types/images';
import { StackParamList } from '@/types/routeParams';
import { Screens } from '@/types/screens';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { FC, useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  Image, TouchableOpacity,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import { wallStyle } from './style';

type ViewImageRouteProps = RouteProp<StackParamList, Screens.IMAGE_DETAIL>;

type ViewImagePageProps = {
  route: ViewImageRouteProps;
};

const ViewImage: FC<ViewImagePageProps> = ({ route }) => {
  
  const nav = useNavigation();
  const currentImage = route.params.image;
  const selector = useSelector((state: RootStateType) => state.images);

  const [images, setImages] = useState<PixelImage[]>([]);

  const initialIndex = useMemo(
    () => images.findIndex(image => image.url === currentImage.url),
    [images],
  );

  const initialScrollIndex = useMemo(
    () => (initialIndex >= 0 ? initialIndex : 0),
    [initialIndex],
  );

  useEffect(() => {
    setImages(selector.images);
  }, [selector.images]);

  const itemLayout = (_: any, index: number) => ({
    length: SCREEN_WIDTH(),
    offset: SCREEN_WIDTH() * index,
    index,
  });

  const renderItem = ({item}: {item: PixelImage}) => (
    <View
      style={{
        width: SCREEN_WIDTH(),
      }}>
      <Image source={{uri: item.originalImage}} style={wallStyle.viewImage} />
    </View>
  );

  const closeImage = () => {
    nav.goBack();
  };

  return (
    <View style={wallStyle.viewImageContainer}>
      <FlatList
        horizontal
        data={images}
        showsHorizontalScrollIndicator={false}
        getItemLayout={itemLayout}
        pagingEnabled
        initialScrollIndex={initialScrollIndex}
        renderItem={renderItem}
      />
      <View style={wallStyle.closeImageContainer}>
        <TouchableOpacity style={wallStyle.closeImage} onPress={closeImage}>
          <MaterialIcon icon="close" color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewImage;
