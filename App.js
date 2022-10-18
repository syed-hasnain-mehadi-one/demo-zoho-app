import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from './src/constants/Theme';
import Login from './src/screens/Login';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Text style={styles.text}>Hello world</Text> */}
        <Login />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: FONTS.extraBold,
    fontSize: SIZES.extraLarge,
    color: COLORS.blue,
  },
});

export default App;
