import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View} from 'react-native';
const Logout = () => {
  const logout = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text onPress={logout}>Logout</Text>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
});
