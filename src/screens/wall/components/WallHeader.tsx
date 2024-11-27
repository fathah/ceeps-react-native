import {View} from 'react-native';
import MaterialIcon from '@/components/common/MaterialIcon';
import colors from '@/styles/colors';
import {wallStyle} from '../style';
import SearchBar from './SearchBar';

const WallHeader = ({onSearch}: {onSearch: (text: string) => void}) => {
  return (
    <View style={wallStyle.container}>
      <View style={wallStyle.logo}>
        <MaterialIcon icon="aspect-ratio" color={colors.white} />
        <SearchBar onChange={onSearch} />
      </View>

      <MaterialIcon icon="dots-vertical" color={colors.white} />
    </View>
  );
};

export default WallHeader;
