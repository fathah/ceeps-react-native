import {StackParamList} from '@/types/routeParams';
import {Screens} from '@/types/screens';
import {StackNavigationProp} from '@react-navigation/stack';
import {FC, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {modalStyle} from './style';

type AddBroadCastNavigationProp = StackNavigationProp<
  StackParamList,
  Screens.MODAL
>;

type AddBroadCastProp = {
  navigation: AddBroadCastNavigationProp;
};

const AddBroadCast: FC<AddBroadCastProp> = ({ navigation }) => {
  
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  
  return (
    <View style={modalStyle.wrapper}>
      <TouchableOpacity activeOpacity={1} onPress={handleGoBack} />
      <View style={modalStyle.container}>
        <Text>Modal</Text>
      </View>
    </View>
  );
};

export default AddBroadCast;
