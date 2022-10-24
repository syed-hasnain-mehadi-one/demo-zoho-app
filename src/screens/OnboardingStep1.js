import {ScrollView, StyleSheet, View} from 'react-native';
import TopTitle from '../components/onboardingComponents/TopTitle';
import {COLORS} from '../constants/Theme';

const OnboardingStep1 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TopTitle />
        <View style={styles.card}></View>
      </View>
    </ScrollView>
  );
};

export default OnboardingStep1;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.while,
    height: 300,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
