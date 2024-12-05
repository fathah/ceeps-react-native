import {SCREEN_WIDTH} from '@/constants/dimens';
import {useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const containerSize = SCREEN_WIDTH() / 2 - 20;

const LoadingImages = () => {
  const renderItem = (item: any) => (
    <View>
      <ShimmerPlaceholder
        style={styles.placeholder}
      />
    </View>
  );
  const data = useMemo(() => {
    return Array(10).fill(0);
  }, []);
  const keyExtractor = useMemo(
    () => (item: any, index: number) => index.toString(),
    [],
  );
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default LoadingImages;

const styles = StyleSheet.create({
  placeholder:{
    width: containerSize,
    height: containerSize,
    margin: 10,
    borderRadius: 20,
  }
});