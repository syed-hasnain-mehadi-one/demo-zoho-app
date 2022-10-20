import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import back from '../assets/images/auth/back-arrow.png';
import cover from '../assets/images/Vector.jpg';
import {FullSizeBtn} from '../components/Button';
import TitleCard from '../components/TitleCard';
import {COLORS, FONTS, SIZES} from '../constants/Theme';
const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={cover} style={styles.image}>
        <TitleCard />
        <View style={styles.card}>
          <View style={styles.back}>
            <Image source={back} style={styles.backImg} />
          </View>
          <Text style={styles.cardTitle}>
            Enter your email to get the password reset link.
          </Text>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput placeholder="Enter email" style={styles.formInput} />
          </View>
          <FullSizeBtn label="Genrate password reset link" />
        </View>
      </ImageBackground>
    </View>
  );
};
export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: '#a9acb2',
    resizeMode: 'stretch',
  },
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
  backImg: {
    height: 15,
    width: 15,
  },
  titleContainer: {
    paddingTop: 120,
    padding: 10,
  },
  title: {
    fontSize: SIZES.extraLarge,
    color: COLORS.blue,
    paddingVertical: 15,
    fontFamily: FONTS.extraBold,
  },
  subTitle: {
    fontSize: SIZES.large,
    color: '#4e4f52',
    fontFamily: FONTS.semiBold,
  },
  formContainer: {
    backgroundColor: '#fff',
    height: 450,
    margin: 16,
    borderColor: 'red',
    border: 1,
    shadowColor: 'black',
    borderRadius: 4,
  },
  card: {
    backgroundColor: COLORS.while,
    margin: 10,
    borderRadius: 4,
  },
  cardTitle: {
    fontFamily: FONTS.extraBold,
    fontSize: SIZES.medium,
    color: COLORS.black,
    padding: 16,
  },
  //form field
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
  },
});