import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';

const TitleCard = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Zoho Integration by CedCommerce</Text>
      <Text style={styles.subTitle}>
        Sync multiple frameworks with Zoho CRM.
      </Text>
    </View>
  );
};

export default TitleCard;

const styles = StyleSheet.create({
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
});
