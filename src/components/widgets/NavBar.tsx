import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SingleTab {
  label: string;
  icon: string;
}

const NavBar = ({
  tabs,
  current,
  setTab,
}: {
  tabs: SingleTab[];
  current: number;
  setTab: (tab: number) => void;
}) => {
  return (
    <View
      style={{
        flex: 0.1,
        backgroundColor: colors.primary,

        flexDirection: 'row',
      }}>
      {tabs.map((tab, index) => {
        const color = current === index ? colors.white : "rgba(255,255,255,0.5)"
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setTab(index)}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={tab.icon} size={25} color={color} />
            <Text style={{color: color}}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavBar;
