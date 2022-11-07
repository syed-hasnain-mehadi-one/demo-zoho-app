import {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import cover from '../assets/images/Vector.jpg';
import TitleCard from '../components/authComponents/TitleCard';
import {FullSizeBtn} from '../components/shared/Button';
import Footer from '../components/shared/Footer';
import {PrimaryInput} from '../components/shared/Inputs';
import {COLORS, FONTS, SIZES} from '../constants/Theme';
const ResetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const handlePress = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={cover} resizeMode="cover" style={styles.image}>
        <TitleCard />
        <View style={styles.card}>
          <PrimaryInput
            lable="OTP"
            placeholder="Enter OTP"
            keyboard="numeric"
            setData={setEmail}
          />
          <PrimaryInput
            lable="Password"
            placeholder="Enter Password"
            setData={setEmail}
          />
          <PrimaryInput
            lable="Confirm Paassword"
            placeholder="Enter confirm password"
            setData={setEmail}
          />
          <FullSizeBtn label="Save" onPress={handlePress} />
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
