import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import cover from '../assets/images/Vector.jpg';
import {FullSizeBtn} from '../components/Button';
import Footer from '../components/Footer';
import TitleCard from '../components/TitleCard';
import {COLORS, FONTS, SIZES} from '../constants/Theme';

const Signup = ({navigation}) => {
  const [formData, setFormData] = useState({
    term: false,
    firstName: '',
    lastName: '',
  });
  const handleChange = (term, value) => {
    const temp = {...formData};
    if (term === 'term') {
      setFormData({...temp, term: !temp.term});
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={cover} resizeMode="cover" style={styles.image}>
          <TitleCard />
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Register/Create a new account</Text>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>First name</Text>
              <TextInput
                placeholder="Enter first name"
                style={styles.formInput}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Last name</Text>
              <TextInput
                placeholder="Enter last name"
                style={styles.formInput}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Username</Text>
              <TextInput
                placeholder="Enter username"
                style={styles.formInput}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput placeholder="Enter email" style={styles.formInput} />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Password</Text>
              <TextInput
                placeholder="Enter password"
                style={styles.formInput}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.formLabel}>Confirm password</Text>
              <TextInput
                placeholder="Enter confirm password"
                style={styles.formInput}
              />
            </View>
            <View style={styles.box}>
              <CheckBox
                value={formData?.term}
                onValueChange={newValue => handleChange('term', newValue)}
              />
              <Text style={styles.terms}>
                Accecept Terms & Conditions.
                <Text style={styles.linkBtn}> Read Policy </Text>
              </Text>
            </View>
            <FullSizeBtn label="Create account" />
            <View style={styles.infoTitle}>
              <Text style={styles.info}>
                <Text
                  style={styles.linkBtn}
                  onPress={() => navigation.navigate('Login')}>
                  Sign in{' '}
                </Text>
                <Text>here if you already have account</Text>
              </Text>
            </View>
          </View>
          <Footer />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

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
    color: COLORS.lightBlack,
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
    color: COLORS.black,
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
    color: COLORS.black,
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
  terms: {
    color: COLORS.black,
  },
  linkBtn: {
    color: 'blue',
    fontFamily: FONTS.bold,
  },
  box: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 10,
    alignItems: 'center',
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
});

export default Signup;
