import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';

const TopTitle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://dev.apps.cedcommerce.com/marketplace-integration/static/modules/etsy/assets/images/favicon.ico',
          }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.title}>Welcome to Zoho Integration</Text>
        <Text style={styles.subTitle}>By CedCommerce</Text>
      </View>
    </View>
  );
};

export default TopTitle;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
  },
  image: {
    width: 30,
    height: 30,
  },
  imageContainer: {
    margin: 5,
    backgroundColor: COLORS.lightGray,
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge,
    color: COLORS.black,
  },
  subTitle: {
    fontFamily: FONTS.light,
    fontSize: SIZES.extraLarge,
    color: COLORS.lightBlack,
  },
});
