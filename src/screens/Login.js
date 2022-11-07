import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext, useState} from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import cover from '../assets/images/Vector.jpg';
import {FullSizeBtn} from '../components/shared/Button';
import Footer from '../components/shared/Footer';
import {PrimaryInput} from '../components/shared/Inputs';
import {COLORS, FONTS, SIZES} from '../constants/Theme';
import AuthContext from '../context/AuthContext';

export default function Login({navigation}) {
  const {setUser, user} = useContext(AuthContext);
  console.log('user', user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      if (!email || !password) return 0;
      const payload = {
        email,
        password,
      };
      setUser(payload);
      await AsyncStorage.setItem('authData', JSON.stringify(payload));
    } catch (e) {
      console.log('error', e);
    }
  };
  return (
    <ScrollView>
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
            <PrimaryInput
              lable="Email"
              placeholder="Enter email or username"
              setData={setEmail}
            />
            <PrimaryInput
              lable="Password"
              placeholder="Enter your password"
              setData={setPassword}
              isPassword={true}
            />
            <View style={styles.forgetContainer}>
              <Pressable onPress={() => navigation.navigate('Forget')}>
                <Text style={styles.forget}>Forget Password ?</Text>
              </Pressable>
            </View>
            <FullSizeBtn label="Sign In" onPress={handleLogin} />
            <View style={styles.infoTitle}>
              <Text style={styles.info}>
                <Text
                  style={styles.linkBtn}
                  onPress={() => navigation.navigate('Signup')}>
                  Sign up{' '}
                </Text>
                <Text>if your want to create new account</Text>
              </Text>
            </View>
          </View>
          <Footer />
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: '#a9acb2',
    resizeMode: 'stretch',
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
    // height: 400,
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
  linkBtn: {
    color: 'blue',
    fontFamily: FONTS.bold,
  },
  forgetContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
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
    alignItems: 'center',
  },
  //footer
  footerContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    fontSize: SIZES.large,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
  },
});
