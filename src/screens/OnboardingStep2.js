import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from '../components/onboardingComponents/Card';
import TopTitle from '../components/onboardingComponents/TopTitle';
import {SmallButton} from '../components/shared/Button';
import Footer from '../components/shared/Footer';
import {COLORS, FONTS, SIZES} from '../constants/Theme';

const OnboardingStep2 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TopTitle />
        <View style={styles.card}>
          <View style={styles.cardTitleConatiner}>
            <Text style={styles.cartTitle}>Connect Your Channel(s)</Text>
            <Text style={styles.cartSubTitle}>
              Select and connect channel to integrate with your Zoho acccount.
              Connect atleast one channel to finish onboarding.
            </Text>
          </View>
          <View style={styles.channel}>
            <Card imageUrl="https://i.imgur.com/WBLY0I2.png" />
            <Card imageUrl="https://i.imgur.com/WBLY0I2.png" />
            <Card imageUrl="https://i.imgur.com/WBLY0I2.png" />
            <Card imageUrl="https://i.imgur.com/WBLY0I2.png" />
          </View>
          <View style={styles.button}>
            <SmallButton label="Next" />
          </View>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default OnboardingStep2;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row-reverse',
  },
  card: {
    backgroundColor: COLORS.while,
  },
  channel: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    width: '100%',
  },
  cardTitleConatiner: {
    padding: 16,
    width: '100%',
  },
  cartTitle: {
    fontFamily: FONTS.extraBold,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  cartSubTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.black,
  },
});
