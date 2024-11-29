import colors from '@/styles/colors';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ButtonProps = {
  text: string;
  onPress: () => void;
};

const AppButton = (prop: ButtonProps) => {
  return (
    <TouchableOpacity onPress={prop.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{prop.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
