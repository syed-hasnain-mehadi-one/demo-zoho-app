import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
const Logout = () => {
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
      console.log('logout');
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
