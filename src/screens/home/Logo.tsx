import {StyleSheet, Text, View} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.header}>
          <Text style={styles.logo}>Ceebs</Text>
          <View>
              <Text>DM</Text>
          </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  header: {
        flex: 1,
      flexDirection: 'row',
    justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
   
  },
});
