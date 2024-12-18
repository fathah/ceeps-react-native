import { Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../styles/colors';
import { styles } from './style';


const Logo = () => {
  return (
    <View style={styles.header}>
          <Text style={styles.logo}>Ceebs</Text>
          <View>
        <Icon name={"account-circle"} size={40} color={colors.black} />
          </View>
    </View>
  );
};

export default Logo;

