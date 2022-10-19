import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Signup from './src/screens/Signup';
// import Login from './src/screens/Login';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Login /> */}
        <Signup />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
