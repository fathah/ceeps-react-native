import {View} from 'react-native';
import {whisperStyle} from '../style';
import {Text} from 'react-native';
import MaterialIcon from '@/components/common/MaterialIcon';
import colors from '@/styles/colors';

const WhisperHeader = () => {
  return (
    <View style={whisperStyle.container}>
      <MaterialIcon icon="android-messages" color={colors.white} />
      <Text style={whisperStyle.text}>Whisper</Text>
    </View>
  );
};

export default WhisperHeader;
