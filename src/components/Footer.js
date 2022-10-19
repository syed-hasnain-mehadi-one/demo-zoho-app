import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/Theme';
const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footer}>A CedCommerce Inc Product 2022.</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
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
