import {ScrollView, StyleSheet, View} from 'react-native';
import Signup from './src/screens/Signup';
// import Login from './src/screens/Login';
// import ForgetPassword from './src/screens/ForgetPassword';
const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {/* <Login /> */}
        <Signup />
        {/* <ForgetPassword /> */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
