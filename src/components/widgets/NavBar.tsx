import {ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface SingleTab {
  label: string;
  icon: ReactNode;
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
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setTab(index)}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="home" size={30} color={colors.white} />
            <Text style={{color: colors.white}}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavBar;
