import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import cover from '../assets/images/Vector.jpg';
import TitleCard from '../components/authComponents/TitleCard';
import {FullSizeBtn} from '../components/shared/Button';
import Footer from '../components/shared/Footer';
import {COLORS, FONTS, SIZES} from '../constants/Theme';
const ResetPassword = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={cover} resizeMode="cover" style={styles.image}>
        <TitleCard />
        <View style={styles.card}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>OTP</Text>
            <TextInput
              placeholder="Enter OTP"
              style={styles.formInput}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Password</Text>
            <TextInput placeholder="Enter password" style={styles.formInput} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Confirm Password</Text>
            <TextInput
              placeholder="Enter confirm password"
              style={styles.formInput}
            />
          </View>
          <Pressable onPress={handlePress}>
            <FullSizeBtn label="Save" />
          </Pressable>
        </View>
        <Footer />
      </ImageBackground>
    </View>
  );
};
export default ResetPassword;

const styles = StyleSheet.create({
  back: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderColor: COLORS.black,
    borderWidth: 1,
    height: 35,
    width: 35,
    marginTop: 15,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: COLORS.while,
    margin: 10,
    borderRadius: 4,
  },
  formField: {
    paddingHorizontal: 16,
    paddingTop: 10,
    color: COLORS.black,
  },
  formLabel: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.black,
    paddingBottom: 5,
  },
  formInput: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 4,
    size: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
  },
  image: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: '#a9acb2',
    resizeMode: 'stretch',
    position: 'absolute',
    height: '100%',
  },
});
