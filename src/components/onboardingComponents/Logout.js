import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import AuthContext from '../../context/AuthContext';
const Logout = () => {
  const {setUser} = useContext(AuthContext);
  const logout = async () => {
    try {
      await AsyncStorage.clear();
      setUser({});
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Text onPress={logout} style={styles.button}>
        Logout
      </Text>
    </TouchableOpacity>
  );
};

export default Logout;

const styles = StyleSheet.create({
  button: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    padding: 10,
    borderRadius: 4,
  },
  container: {
    alignItems: 'flex-end',
    width: '100%',
    padding: 20,
  },
});
