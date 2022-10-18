import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import cover from '../assets/images/Vector.jpg';
import {COLORS, FONTS, SIZES} from '../constants/Theme';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={cover} resizeMode="cover" style={styles.image}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Zoho Integration by CedCommerce</Text>
          <Text style={styles.subTitle}>
            Sync multiple frameworks with Zoho CRM.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sign In to your account</Text>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Email/Username</Text>
            <TextInput
              placeholder="Enter email or username"
              style={styles.formInput}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Password</Text>
            <TextInput placeholder="Enter password" style={styles.formInput} />
          </View>
          <View style={styles.forgetContainer}>
            <Text style={styles.forget}>Forget Password ?</Text>
          </View>
          <View style={styles.button}>
            <Button
              // onPress={onPressLearnMore}
              title="Sign In"
              color={COLORS.blue}
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.infoTitle}>
            <Text style={styles.info}>
              Register here if your want to create new account
            </Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>A CedCommerce Inc Product 2022.</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    opacity: 0.6,
    backgroundColor: '#a9acb2',
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
  // card design
  card: {
    height: 400,
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
  forgetContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  forget: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.small,
    color: 'blue',
  },

  //button
  button: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  infoTitle: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  info: {
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
    fontSize: SIZES.small,
  },
  //footer
  footerContainer: {
    paddingVertical: 50,
    paddingBottom: 25,
    alignItems: 'center',
  },
  footer: {
    fontSize: SIZES.large,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
  },
});
