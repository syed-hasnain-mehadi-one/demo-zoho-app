import {SafeAreaView, ScrollView} from 'react-native';
// import Signup from './src/screens/Signup';
// import Login from './src/screens/Login';
import ForgetPassword from './src/screens/ForgetPassword';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Login /> */}
        {/* <Signup /> */}
        <ForgetPassword />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
